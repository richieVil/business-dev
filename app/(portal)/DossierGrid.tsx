'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface DossierItem {
  title: string;
  subtitle: string;
  href: string;
  tags: string[];
  accent: string;
}

export default function DossierGrid({ items }: { items: DossierItem[] }) {
  const [query, setQuery] = useState('');

  const filteredDossiers = query.trim() === ''
    ? items
    : items.filter(dossier =>
        dossier.title.toLowerCase().includes(query.toLowerCase()) ||
        dossier.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        dossier.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <>
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
              <div className="flex justify-between items-start">
                <h3 className="text-[var(--accent-color)] font-bold text-lg mb-2 group-hover:underline">
                  {dossier.title}
                </h3>
                {dossier.tags.includes('AUTO') && (
                  <span className="text-[9px] font-mono text-zinc-600 border border-zinc-800 px-1 rounded uppercase">
                    Auto-Detected
                  </span>
                )}
              </div>
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
    </>
  );
}
