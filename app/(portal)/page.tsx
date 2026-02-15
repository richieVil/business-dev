import fs from 'fs';
import path from 'path';
import DossierGrid, { DossierItem } from './DossierGrid';

// 1. Define Manual Overrides for "Polished" Ventures
const manualOverrides: Record<string, Partial<DossierItem>> = {
  'cbar': {
    title: 'CBAR Protocol',
    subtitle: 'Cross-Border Audit Reconciler for Nearshoring operations.',
    tags: ['saas', 'regulatory', 'nearshoring', 'logistics'],
    accent: '#DC2626',
  },
  'agave-artesanal': {
    title: 'Agave Artesanal',
    subtitle: 'Disrupting the industrial agave market with verified technical purity.',
    tags: ['cpg', 'spirits', 'export', 'dtc'],
    accent: '#BC472B',
  },
  'malt-arbitrage': {
    title: 'Malt Fractional Arbitrage',
    subtitle: 'Industrial sorting and import substitution strategy for the Mexican market.',
    tags: ['industrial', 'arbitrage', 'commodities', 'mexico'],
    accent: '#d4af37',
  },
  'compressed-air-leak-ai': {
    title: 'Compressed Air Leak AI',
    subtitle: 'Acoustic Spectrogram Inference Engine & Fiscal Ledger.',
    tags: ['industrial', 'ai', 'energy', 'maintenance'],
    accent: '#DC2626',
  }
};

// 2. Helper to Format Auto-Discovered Names
const humanize = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

async function getDossiers(): Promise<DossierItem[]> {
  const appDir = path.join(process.cwd(), 'app');
  
  // Read directory
  const entries = await fs.promises.readdir(appDir, { withFileTypes: true });

  // Filter for directories that are NOT system folders
  const ventures = entries
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => 
      !name.startsWith('(') && // Exclude route groups like (portal)
      !name.startsWith('_') && // Exclude private folders
      !name.startsWith('.') && // Exclude .git etc
      !['components', 'api', 'test', 'node_modules'].includes(name) // Exclude reserved
    );

  // Map to Dossier Items
  const dossierItems: DossierItem[] = ventures.map(slug => {
    const override = manualOverrides[slug];
    
    return {
      title: override?.title || humanize(slug),
      subtitle: override?.subtitle || 'Strategic Technical Dossier (Auto-Generated).',
      href: `/${slug}`,
      tags: override?.tags || ['auto-discovered', 'draft'],
      accent: override?.accent || '#3b82f6', // Default Blue
    };
  });

  // Sort: Manual overrides first, then alphabetical
  return dossierItems.sort((a, b) => {
    const isAManual = Object.keys(manualOverrides).some(k => k === a.href.substring(1));
    const isBManual = Object.keys(manualOverrides).some(k => k === b.href.substring(1));
    if (isAManual && !isBManual) return -1;
    if (!isAManual && isBManual) return 1;
    return a.title.localeCompare(b.title);
  });
}

export default async function Home() {
  const dossiers = await getDossiers();

  return (
    // Changed: Locked height to screen, forced internal scroll, added bottom padding
    <main className="h-screen w-full bg-[#121212] overflow-y-auto p-6 sm:p-8">
      <div className="max-w-xl mx-auto pb-24">
        <h1 className="text-zinc-500 text-sm tracking-widest uppercase mb-2 text-center sm:text-left">
          Strategic Lab
        </h1>
        <h2 className="text-3xl font-bold text-white mb-8 text-center sm:text-left">
          Dossier Index
        </h2>
        
        <DossierGrid items={dossiers} />
      </div>
    </main>
  );
}
