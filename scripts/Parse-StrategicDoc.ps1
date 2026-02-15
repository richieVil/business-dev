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

# 2. Define the Regex for the markers
# (?s) allows the dot (.) to match newlines (Singleline mode)
$pattern = '(?s)\[\[STRATEGIC_DOCUMENT_START\]\](.*?)\s*\[\[STRATEGIC_DOCUMENT_END\]\]'
$matches = [regex]::Matches($rawContent, $pattern)

if ($matches.Count -eq 0) {
    Write-Host "No strategic documents found in $InputFile. Ensure markers are present." -ForegroundColor Yellow
    return
}

$outputDir = "strategic-lab-architect/generated-plans"
if (!(Test-Path $outputDir)) { New-Item -Path $outputDir -ItemType Directory }

$aggregatedContent = ""
$masterFileName = $null

foreach ($match in $matches) {
    $rawBlock = $match.Groups[1].Value

    # 3. Deep Unescape (Literal string replacement for reliability)
    # Handles double-escaped backslashes and quotes from AI Studio Python exports
    $cleanContent = $rawBlock.Replace('\\\"', '"').Replace('\"', '"').Replace("\\'", "'").Replace("\'", "'").Replace('\\n', "`n").Replace('\\t', "`t").Replace('\\\\', '\')

    # 4. Determine Master Filename
    if ($null -eq $masterFileName) {
        # Priority 1: Mandatory **Venture:** line
        if ($cleanContent -match '\*\*Venture:\*\*\s*(.*)') {
            $baseName = $Matches[1].Trim()
        }
        # Priority 2: Fallback to first # Header
        elseif ($cleanContent -match '(?m)^#\s+(.*)') {
            $baseName = $Matches[1].Trim()
        }
        
        if ($baseName) {
            # Sanitize: Remove markdown bolding and filesystem-illegal characters
            $sanitized = $baseName -replace '\*\*', '' -replace '[\\/:*?"<>|]', ''
            $masterFileName = ($sanitized.Trim() -replace '\s+', '-') + ".md"
        } else {
            $timestamp = Get-Date -Format "yyyy-MM-dd_HHmmss"
            $masterFileName = "Strategic-Plan-$timestamp.md"
        }
    }

    # 5. Collate Content
    $aggregatedContent += $cleanContent + "`n`n---`n`n"
}

# 6. Save the Master File
$outputPath = Join-Path $outputDir $masterFileName
Set-Content -Path $outputPath -Value $aggregatedContent -Encoding Utf8
Write-Host "Successfully collated $($matches.Count) sections into: $outputPath" -ForegroundColor Green

# 6. Cleanup
if ($matches.Count -gt 0) {
    Remove-Item -Path $InputFile -Force
    Write-Host "Source file $InputFile has been removed." -ForegroundColor Gray
}
