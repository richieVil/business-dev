'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const dossiers = [
  {
    title: 'CBAR Protocol',
    subtitle: 'Cross-Border Audit Reconciler for Nearshoring operations.',
    href: '/cbar',
    tags: ['saas', 'regulatory', 'nearshoring', 'logistics'],
    accent: '#DC2626',
  },
  {
    title: 'Agave Artesanal',
    subtitle: 'Disrupting the industrial agave market with verified technical purity.',
    href: '/agave-artesanal',
    tags: ['cpg', 'spirits', 'export', 'dtc'],
    accent: '#BC472B',
  },
  {
    title: 'Malt Fractional Arbitrage',
    subtitle: 'Industrial sorting and import substitution strategy for the Mexican market.',
    href: '/malt-arbitrage',
    tags: ['industrial', 'arbitrage', 'commodities', 'mexico'],
    accent: '#d4af37',
  },
];

export default function Home() {
  const [query, setQuery] = useState('');

  const filteredDossiers = query.trim() === ''
    ? dossiers
    : dossiers.filter(dossier =>
        dossier.title.toLowerCase().includes(query.toLowerCase()) ||
        dossier.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        dossier.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <main className="min-h-screen bg-[#121212] p-6 sm:p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-zinc-500 text-sm tracking-widest uppercase mb-2 text-center sm:text-left">
          Strategic Lab
        </h1>
        <h2 className="text-3xl font-bold text-white mb-8 text-center sm:text-left">
          Dossier Index
        </h2>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, tag, or keyword..."
            className="w-full bg-[#1e1e1e] text-white placeholder-zinc-500 border border-zinc-800 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all font-mono text-sm"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Dossier List */}
        <div className="flex flex-col gap-4">
          {filteredDossiers.length > 0 ? (
            filteredDossiers.map((dossier) => (
              <Link
                href={dossier.href}
                key={dossier.href}
                className="group block p-6 bg-[#181818] border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all"
                style={{ '--accent-color': dossier.accent } as React.CSSProperties}
              >
                <h3 className="text-[var(--accent-color)] font-bold text-lg mb-2 group-hover:underline">
                  {dossier.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">
                  {dossier.subtitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dossier.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-500 font-mono">No dossiers found for "{query}"</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
