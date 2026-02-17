param (
    [Parameter(Mandatory=$false)]
    [string]$InputFile = "$HOME\Downloads\ai_studio_code.py"
)

# 1. Read the raw Python export
if (!(Test-Path $InputFile)) { 
    Write-Host "Target file not found: $InputFile" -ForegroundColor Red
    Write-Host "Please ensure you downloaded the code from AI Studio." -ForegroundColor Gray
    return 
}
$rawContent = Get-Content -Path $InputFile -Raw

# 2. Global Metadata Scan
# Attempt to find the Venture name globally in the raw content first.
$masterFileName = $null
if ($rawContent -match '\*\*Venture:\*\*\s*([^\r\n]*)') {
    $baseName = $Matches[1].Trim()
    # Sanitize: Remove markdown bolding and filesystem-illegal characters
    $sanitized = $baseName -replace '\*\*', '' -replace '[\\/:*?"<>|]', ''
    $masterFileName = ($sanitized.Trim() -replace '\s+', '-') + ".md"
    Write-Host "Venture Name detected: $masterFileName" -ForegroundColor Cyan
}

# 3. Define the Regex for the markers
$pattern = '(?s)\[\[STRATEGIC_DOCUMENT_START\]\](.*?)\s*\[\[STRATEGIC_DOCUMENT_END\]\]'
$matches = [regex]::Matches($rawContent, $pattern)

if ($matches.Count -eq 0) {
    Write-Host "No strategic documents found in $InputFile. Ensure markers are present." -ForegroundColor Yellow
    return
}

$outputDir = "strategic-lab-architect/generated-plans"
if (!(Test-Path $outputDir)) { New-Item -Path $outputDir -ItemType Directory }

$aggregatedContent = ""
# $masterFileName is already set by Global Scan or is null. Do not reset it here.

foreach ($match in $matches) {
    $rawBlock = $match.Groups[1].Value

    # 3. Deep Unescape (Literal string replacement for reliability)
    # Handles double-escaped backslashes and quotes from AI Studio Python exports
    $cleanContent = $rawBlock.Replace('\\\"', '"').Replace('\"', '"').Replace("\\'", "'").Replace("\'", "'").Replace('\\n', "`n").Replace('\\t', "`t").Replace('\\\\', '\')

    # 4. Determine Master Filename (Fallback)
    # Only run this logic if the Global Scan failed to find a name
    if ($null -eq $masterFileName) {
        $baseName = $null
        
        # Priority 1: Check the block for Venture line (in case it was inside tags)
        if ($cleanContent -match '\*\*Venture:\*\*\s*(.*)') {
            $baseName = $Matches[1].Trim()
        }
        # Priority 2: Fallback to first # Header
        elseif ($cleanContent -match '(?m)^#\s+(.*)') {
            $baseName = $Matches[1].Trim()
        }

        if ($baseName) {
            # Sanitize
            $sanitized = $baseName -replace '\*\*', '' -replace '[\\/:*?"<>|]', ''
            $masterFileName = ($sanitized.Trim() -replace '\s+', '-') + ".md"
        }
    }

    # 5. Collate Content
    $aggregatedContent += $cleanContent + "`n`n---`n`n"
}

# Final Fallback if still null after all blocks
if ($null -eq $masterFileName) {
    $timestamp = Get-Date -Format "yyyy-MM-dd_HHmmss"
    $masterFileName = "Strategic-Plan-$timestamp.md"
}

# 6. Save the Master File
$outputPath = Join-Path $outputDir $masterFileName
Set-Content -Path $outputPath -Value $aggregatedContent -Encoding Utf8
Write-Host "Successfully collated $($matches.Count) sections into: $outputPath" -ForegroundColor Green

# 7. Cleanup
if ($matches.Count -gt 0) {
    Remove-Item -Path $InputFile -Force
    Write-Host "Source file $InputFile has been removed." -ForegroundColor Gray
}
