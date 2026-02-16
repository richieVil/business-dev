import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const ideas = await request.json();
    
    // Define headers in specific order to match schema
    const headers = [
      "ID", "Name", "Archetype", "ProductsServices", "CustomerTypes", "Model", 
      "Barrier", "CapitalReq", "AILeverage", "StrategicAcquirer", 
      "Feasibility", "Value", "BlueOcean", "Physics", "Velocity", 
      "SavedStatus", "TAM_Customers", "AvgRevPerCust", "TAM_MUSD", 
      "Comments", "LastUpdated"
    ];

    // Convert JSON to CSV
    const csvContent = [
      headers.join(','),
      ...ideas.map((idea: any) => {
        return headers.map(header => {
          let value = idea[header];
          
          // Handle numbers/nulls
          if (value === null || value === undefined) value = "";
          
          // Force string for text fields to handle quotes
          const stringValue = String(value);
          
          // Escape quotes and wrap in quotes if necessary
          if (stringValue.includes('"') || stringValue.includes(',') || stringValue.includes('\n')) {
            return `"${stringValue.replace(/"/g, '""')}"`;
          }
          return stringValue;
        }).join(',');
      })
    ].join('\n');

    const filePath = path.join(process.cwd(), 'strategic-lab-architect', 'idea-portfolio.csv');
    
    // Write file synchronously to ensure atomicity
    fs.writeFileSync(filePath, csvContent, 'utf8');

    return NextResponse.json({ success: true, count: ideas.length });
  } catch (error) {
    console.error("Failed to save CSV:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
