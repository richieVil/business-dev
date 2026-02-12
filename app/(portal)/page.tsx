import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#121212] p-6 text-center">
      <h1 className="text-zinc-500 text-sm tracking-widest uppercase mb-4">Business Development Portal</h1>
      <h2 className="text-3xl font-bold text-white mb-12">Select Active Proposal</h2>
      
      <Link href="/malt-arbitrage" className="group p-8 bg-[#1e1e1e] border border-zinc-800 rounded-2xl hover:border-[#d4af37] transition-all max-w-sm w-full">
        <h3 className="text-[#d4af37] font-bold text-lg mb-2">Malt Fractional Arbitrage</h3>
        <p className="text-zinc-500 text-sm">Industrial sorting and import substitution strategy for the Mexican market.</p>
      </Link>
    </main>
  );
}
