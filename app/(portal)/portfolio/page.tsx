import fs from 'fs';
import path from 'path';
import { TrendingUp } from 'lucide-react';
import PortfolioGrid from '@/app/components/PortfolioGrid';

export default async function PortfolioPage() {
  const csvPath = path.join(process.cwd(), 'strategic-lab-architect', 'idea-portfolio.csv');
  let csvData = "";

  try {
    csvData = fs.readFileSync(csvPath, 'utf8');
  } catch (error) {
    console.error("Could not read portfolio CSV:", error);
    return (
      <div className="p-10 text-center">
        <h1 className="text-red-500 text-xl font-bold">Portfolio Database Not Found</h1>
        <p className="text-slate-400">Ensure the CSV exists at strategic-lab-architect/idea-portfolio.csv</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#0a0a0c] text-slate-200 flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col px-4 py-4 md:p-6 overflow-hidden max-w-[1600px] mx-auto w-full">
        <header className="flex-none mb-4 md:mb-6 flex flex-col md:block">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-blue-500 font-mono text-[10px] md:text-xs uppercase tracking-tighter">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" /> Venture Architect Lab
            </div>
          </div>
          <h1 className="text-xl md:text-3xl font-bold tracking-tight text-white">Portfolio Dashboard</h1>
          <p className="text-slate-400 max-w-2xl text-xs md:text-sm hidden md:block mt-1">
            Real-time triage using the Geometric Mean Protocol. Highlighting status mismatches for human-in-the-loop verification.
          </p>
        </header>

      <main className="flex-1 flex flex-col min-h-0">
        <PortfolioGrid csvData={csvData} />
      </main>
      </div>
    </div>
  );
}
