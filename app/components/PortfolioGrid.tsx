"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, AlertCircle, TrendingUp, Archive, RefreshCcw, CheckCircle, ArrowUpDown, ChevronUp, ChevronDown, X, ExternalLink, Copy, ClipboardCheck, FilterX, Download, Save } from 'lucide-react';

interface Idea {
  ID: string;
  Name: string;
  Archetype: string;
  ProductsServices: string;
  CustomerTypes: string;
  Model: string;
  Barrier: string;
  CapitalReq: string;
  AILeverage: string;
  StrategicAcquirer: string;
  Feasibility: number;
  Value: number;
  BlueOcean: number;
  Physics: number;
  Velocity: number;
  SavedStatus: string;
  TAM_Customers: string;
  AvgRevPerCust: string;
  TAM_MUSD: string;
  GeometricScore: number;
  SuggestedStatus: string;
  Mismatch: boolean;
}

export default function PortfolioGrid({ csvData }: { csvData: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const [colFilters, setColFilters] = useState<Partial<Record<keyof Idea, string>>>({});
  const [sortConfig, setSortConfig] = useState<{ key: keyof Idea | 'GeometricScore'; direction: 'asc' | 'desc' }>({
    key: 'GeometricScore',
    direction: 'desc'
  });

  const ideas = useMemo(() => {
    const lines = csvData.split('\n').filter(line => line.trim() !== "");
    const headers = lines[0].split(',');

    const seenIds = new Set();
    // Helper to parse a single CSV line robustly
    const parseLine = (text: string) => {
      const vals: string[] = [];
      let curr = "";
      let quote = false;
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (c === '"') {
          if (quote && text[i + 1] === '"') { curr += '"'; i++; }
          else { quote = !quote; }
        } else if (c === ',' && !quote) {
          vals.push(curr.trim().replace(/^"|"$/g, ''));
          curr = "";
        } else { curr += c; }
      }
      vals.push(curr.trim().replace(/^"|"$/g, ''));
      return vals;
    };

    // Use robust parser for headers too (ensures alignment)
    const cleanHeaders = parseLine(lines[0]);
    console.log("Parsed Headers:", JSON.stringify(cleanHeaders));

    const parsed = lines.slice(1).reduce((acc: Idea[], line, index) => {
      if (!line.trim() || line.replace(/,/g, '').trim() === "") return acc;

      const values = parseLine(line);
      const row: any = {};
      cleanHeaders.forEach((h, i) => row[h] = values[i]);
      
      if (index === 0) console.log("First Row Keys:", JSON.stringify(Object.keys(row)));

      // Guard against empty rows
      if (!row.ID && !values[1]) return acc;

      const f = parseFloat(row.Feasibility) || 0;
      const v = parseFloat(row.Value) || 0;
      const o = parseFloat(row.BlueOcean) || 0;
      const p = parseFloat(row.Physics) || 0;
      const s = parseFloat(row.Velocity) || 0;

      const geoScore = Math.pow(f * v * o * p * s, 1/5);

      let suggested = "ARCHIVE";
      if (geoScore >= 3.8) suggested = "GREEN-LIGHT";
      else if (geoScore >= 3.3) suggested = "REFINE";
      else if (geoScore >= 2.6) suggested = "PIVOT";

      const ideaId = row.ID?.trim() || `MISSING-${index}`;
      
      // Prevent Duplicate Keys
      if (seenIds.has(ideaId)) return acc;
      seenIds.add(ideaId);

      // Robust Name Mapping: Try property -> Try Index 1 -> Default
      const safeName = row.Name || values[1] || "Unnamed Idea";

      acc.push({
        ID: ideaId,
        Name: safeName,
        Archetype: row.Archetype,
        ProductsServices: row.ProductsServices || row.Description,
        CustomerTypes: row.CustomerTypes || row.CustomerTyps,
        Model: row.Model || row.BusinessModel,
        Barrier: row.Barrier,
        CapitalReq: row.CapitalReq,
        AILeverage: row.AILeverage,
        StrategicAcquirer: row.StrategicAcquirer,
        Feasibility: f,
        Value: v,
        BlueOcean: o,
        Physics: p,
        Velocity: s,
        SavedStatus: row.SavedStatus || row.Status,
        TAM_Customers: row.TAM_Customers,
        AvgRevPerCust: row.AvgRevPerCust,
        TAM_MUSD: row.TAM_MUSD,
        GeometricScore: geoScore,
        SuggestedStatus: suggested,
        Mismatch: (row.SavedStatus || row.Status) !== suggested && (row.SavedStatus || row.Status) !== "DECK-READY"
      } as Idea);
      
      return acc;
    }, []);

    return parsed.sort((a, b) => {
      let aValue: any = a[sortConfig.key];
      let bValue: any = b[sortConfig.key];

      // numeric cleaning for TAM
      if (sortConfig.key === 'TAM_MUSD') {
        aValue = parseFloat(String(aValue).replace(/[^0-9.-]+/g, "")) || 0;
        bValue = parseFloat(String(bValue).replace(/[^0-9.-]+/g, "")) || 0;
      }

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [csvData, sortConfig]);

  const filteredIdeas = ideas.filter(idea => {
    const searchStr = searchTerm.toLowerCase();
    const matchesSearch = (idea.Name?.toLowerCase() || "").includes(searchStr) || 
                          (idea.ID?.toLowerCase() || "").includes(searchStr) ||
                          (idea.ProductsServices?.toLowerCase() || "").includes(searchStr);
    const matchesStatus = filterStatus === "ALL" || idea.SavedStatus === filterStatus;
    
    const matchesColFilters = Object.entries(colFilters).every(([key, val]) => {
      if (!val) return true;
      const itemVal = String(idea[key as keyof Idea] || "").toLowerCase();
      return itemVal.includes(val.toLowerCase());
    });

    return matchesSearch && matchesStatus && matchesColFilters;
  });

  const [copying, setCopying] = useState(false);

  const clearFilters = () => {
    setSearchTerm("");
    setFilterStatus("ALL");
    setColFilters({});
  };

  const saveToDisk = async (newIdeas: Idea[]) => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIdeas)
      });
      if (!res.ok) throw new Error("Failed to save");
      // Force reload to see changes (optional, but good for CSV sync)
      window.location.reload();
    } catch (e) {
      alert("Error saving to disk. Check console.");
      console.error(e);
      setIsSaving(false);
    }
  };

  const handleImport = () => {
    try {
      // Clean markdown code blocks if present
      const cleanJson = importText.replace(/```json/g, '').replace(/```/g, '').trim();
      const imported: Idea[] = JSON.parse(cleanJson);
      
      // Upsert Logic
      const newMap = new Map(ideas.map(i => [i.ID, i]));
      imported.forEach(item => {
        // Ensure numbers are numbers
        item.Feasibility = Number(item.Feasibility) || 0;
        item.Value = Number(item.Value) || 0;
        item.BlueOcean = Number(item.BlueOcean) || 0;
        item.Physics = Number(item.Physics) || 0;
        item.Velocity = Number(item.Velocity) || 0;
        newMap.set(item.ID, { ...newMap.get(item.ID), ...item });
      });
      
      const mergedList = Array.from(newMap.values());
      saveToDisk(mergedList);
      setShowImport(false);
      setImportText("");
    } catch (e) {
      alert("Invalid JSON format. Please check your clipboard.");
    }
  };


  const copyToClipboard = async (data: Idea[]) => {
    const headers = "ID,Name,Archetype,ProductsServices,CustomerTypes,Model,Feasibility,Value,BlueOcean,Physics,Velocity,SavedStatus,TAM_MUSD";
    const rows = data.map(i => {
      const name = (i.Name || "").replace(/"/g, '""');
      const desc = (i.ProductsServices || "").replace(/"/g, '""');
      const archetype = (i.Archetype || "");
      const customers = (i.CustomerTypes || "").replace(/"/g, '""');
      const model = (i.Model || "").replace(/"/g, '""');
      
      return `${i.ID},"${name}","${archetype}","${desc}","${customers}","${model}",${i.Feasibility},${i.Value},${i.BlueOcean},${i.Physics},${i.Velocity},${i.SavedStatus},${i.TAM_MUSD}`;
    }).join('\n');
    
    const fullCsv = `${headers}\n${rows}`;
    
    try {
      await navigator.clipboard.writeText(fullCsv);
      setCopying(true);
      setTimeout(() => setCopying(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const requestSort = (key: keyof Idea | 'GeometricScore') => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'GREEN-LIGHT': 
      case 'DECK-READY': 
      case 'LAB-READY': 
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'REFINE': return 'text-sky-400 bg-sky-400/10 border-sky-400/20';
      case 'PIVOT': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'ARCHIVED': return 'text-slate-500 bg-slate-500/10 border-slate-500/20 line-through decoration-slate-600/50';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  const SortIcon = ({ column }: { column: string }) => {
    if (sortConfig.key !== column) return <ArrowUpDown className="w-3 h-3 ml-1 opacity-30" />;
    return sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3 ml-1 text-blue-400" /> : <ChevronDown className="w-3 h-3 ml-1 text-blue-400" />;
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 space-y-3 md:space-y-4 overflow-hidden w-full">
      {/* Compact Controls */}
      <div className="flex-none flex flex-col gap-3">
        {/* Row 1: Search + Mobile Sort + Actions */}
        <div className="flex gap-2 w-full">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2 pl-9 pr-2 text-slate-200 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Mobile Sort Dropdown (Hidden on Desktop) */}
          <div className="md:hidden relative">
            <select
              className="appearance-none bg-slate-900 border border-slate-800 rounded-lg py-2 pl-3 pr-8 text-slate-200 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/50 h-full"
              onChange={(e) => requestSort(e.target.value as any)}
              value={sortConfig.key}
            >
              <option value="GeometricScore">SCORE</option>
              <option value="TAM_MUSD">TAM ($)</option>
              <option value="Feasibility">FEAS</option>
              <option value="Value">VALU</option>
              <option value="BlueOcean">OCN</option>
              <option value="Physics">PHYS</option>
              <option value="Velocity">VELO</option>
            </select>
            <ArrowUpDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500 pointer-events-none" />
          </div>

          <button 
            onClick={() => setShowImport(true)}
            className="flex items-center justify-center w-9 md:w-auto md:px-3 py-2 rounded-lg border border-blue-500/30 bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-all"
            title="Import / Sync JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline ml-2 text-[10px] font-bold tracking-wider">SYNC</span>
          </button>
          
          <button 
            onClick={() => copyToClipboard(filteredIdeas)}
            className="flex items-center justify-center w-9 md:w-auto md:px-3 py-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all"
            title="Copy CSV"
          >
            {copying ? <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden md:inline ml-2 text-[10px] font-bold tracking-wider">{copying ? "COPIED" : "EXPORT"}</span>
          </button>
        </div>


        {/* Row 2: Status Pills (Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1">
          {(searchTerm || filterStatus !== 'ALL' || Object.keys(colFilters).length > 0) && (
            <button 
              onClick={clearFilters}
              className="flex-none flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[9px] font-bold tracking-wider border border-red-500/30 bg-red-500/5 text-red-400 hover:bg-red-500/10 transition-all"
            >
              <FilterX className="w-3 h-3" /> CLEAR
            </button>
          )}
          {['ALL', 'LAB-READY', 'DECK-READY', 'REFINE', 'PIVOT', 'ARCHIVED'].map(s => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`flex-none px-3 py-1.5 rounded-md text-[9px] font-bold tracking-wider border transition-all whitespace-nowrap ${filterStatus === s ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col overflow-hidden relative">
        
        {/* --- MOBILE CARD VIEW (< md) --- */}
        <div className="md:hidden absolute inset-0 overflow-y-auto scrollbar-hide space-y-3 pb-20">
          {filteredIdeas.map((idea) => (
            <div 
              key={idea.ID}
              onClick={() => setSelectedIdea(idea)}
              className={`bg-slate-900/50 border rounded-xl p-4 active:scale-[0.98] transition-all ${idea.Mismatch ? 'border-amber-500/30' : 'border-slate-800'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-slate-500 font-bold">{idea.ID}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${getStatusColor(idea.SavedStatus)}`}>
                      {idea.SavedStatus}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-200 text-sm line-clamp-1">{idea.Name}</h3>
                  <div className="text-[10px] font-mono text-emerald-400 font-bold mt-0.5">
                    ${idea.TAM_MUSD}M TAM
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-mono font-bold text-blue-400">{idea.GeometricScore.toFixed(2)}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-1 mb-3">
                {[idea.Feasibility, idea.Value, idea.BlueOcean, idea.Physics, idea.Velocity].map((val, idx) => (
                  <div key={idx} className={`h-1 rounded-full ${val >= 4 ? 'bg-emerald-500' : val <= 2 ? 'bg-red-500' : 'bg-slate-700'}`} />
                ))}
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <span>F-V-O-P-S</span>
                {idea.Mismatch && <span className="text-amber-500 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> MISMATCH</span>}
              </div>
            </div>
          ))}
        </div>

        {/* --- DESKTOP TABLE VIEW (>= md) --- */}
        <div className="hidden md:block absolute inset-0 border border-slate-800 rounded-xl bg-slate-900/40 overflow-hidden shadow-inner">
          <div className="absolute inset-0 overflow-auto scrollbar-thin scrollbar-thumb-slate-800/50 hover:scrollbar-thumb-slate-700 transition-colors">
            <table className="w-full text-left border-separate border-spacing-0">
            <thead className="sticky top-0 z-20 bg-slate-900">
              <tr className="border-b border-slate-800 shadow-xl">
                <th className="p-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-800" onClick={() => requestSort('ID')}>
                  <div className="flex items-center">ID <SortIcon column="ID" /></div>
                  <input onClick={(e) => e.stopPropagation()} onChange={(e) => setColFilters({...colFilters, ID: e.target.value})} className="mt-2 block w-full bg-slate-950/50 border border-slate-800 rounded px-1 py-0.5 text-[9px] font-normal" placeholder="Filter..." />
                </th>
                <th className="p-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-800" onClick={() => requestSort('Name')}>
                  <div className="flex items-center">Idea Name <SortIcon column="Name" /></div>
                  <input onClick={(e) => e.stopPropagation()} onChange={(e) => setColFilters({...colFilters, Name: e.target.value})} className="mt-2 block w-full bg-slate-950/50 border border-slate-800 rounded px-1 py-0.5 text-[9px] font-normal" placeholder="Filter..." />
                </th>
                <th className="p-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-800 text-right" onClick={() => requestSort('TAM_MUSD')}>
                  <div className="flex items-center justify-end">TAM ($M) <SortIcon column="TAM_MUSD" /></div>
                  <input onClick={(e) => e.stopPropagation()} onChange={(e) => setColFilters({...colFilters, TAM_MUSD: e.target.value})} className="mt-2 block w-full bg-slate-950/50 border border-slate-800 rounded px-1 py-0.5 text-[9px] font-normal text-right" placeholder="Filter..." />
                </th>
                {['Feasibility', 'Value', 'BlueOcean', 'Physics', 'Velocity'].map((key) => (
                  <th key={key} className="p-2 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-800" onClick={() => requestSort(key as keyof Idea)}>
                    <div className="flex flex-col items-center">{key.substring(0,4)} <SortIcon column={key} /></div>
                    <input onClick={(e) => e.stopPropagation()} onChange={(e) => setColFilters({...colFilters, [key]: e.target.value})} className="mt-2 block w-10 mx-auto bg-slate-950/50 border border-slate-800 rounded px-1 py-0.5 text-[9px] font-normal text-center" placeholder="1-5" />
                  </th>
                ))}
                <th className="p-3 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-800" onClick={() => requestSort('GeometricScore')}>
                  <div className="flex items-center justify-center">Score <SortIcon column="GeometricScore" /></div>
                </th>
                <th className="p-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-800" onClick={() => requestSort('SavedStatus')}>
                  <div className="flex items-center">Status <SortIcon column="SavedStatus" /></div>
                  <input onClick={(e) => e.stopPropagation()} onChange={(e) => setColFilters({...colFilters, SavedStatus: e.target.value})} className="mt-2 block w-full bg-slate-950/50 border border-slate-800 rounded px-1 py-0.5 text-[9px] font-normal" placeholder="Filter..." />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filteredIdeas.map((idea, idx) => (
                <tr
                  key={`${idea.ID}-${idx}`}
                  onClick={() => setSelectedIdea(idea)}
                  className={`group hover:bg-slate-800/30 transition-colors cursor-pointer ${idea.Mismatch ? 'bg-amber-500/[0.02]' : ''}`}
                >
                  <td className="p-4 font-mono text-[11px] text-slate-500 whitespace-nowrap">{idea.ID}</td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-200">{idea.Name}</div>
                    <div className="text-[11px] text-slate-500 truncate max-w-xs">{idea.ProductsServices || idea.Description}</div>
                  </td>
                  <td className="p-4 text-right font-mono text-xs font-bold text-emerald-400">
                    ${idea.TAM_MUSD}M
                  </td>
                  {[idea.Feasibility, idea.Value, idea.BlueOcean, idea.Physics, idea.Velocity].map((val, idx) => (
                    <td key={idx} className="p-2 text-center">
                      <div className={`mx-auto w-8 h-8 flex items-center justify-center rounded text-[11px] font-mono border ${val >= 4 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : val <= 2 ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                        {val}
                      </div>
                    </td>
                  ))}
                  <td className="p-4 text-center">
                    <div className="font-mono font-bold text-blue-400 text-lg">{idea.GeometricScore.toFixed(2)}</div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getStatusColor(idea.SavedStatus)}`}>
                        {idea.SavedStatus}
                      </span>
                      {idea.Mismatch && (
                        <div className="flex items-center text-amber-500 gap-1 tooltip" title={`System suggests: ${idea.SuggestedStatus}`}>
                          <AlertCircle className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <p className="text-[10px] text-slate-600 italic hidden md:block">
        * Geometric Mean = (Feasibility × Value × BlueOcean × Physics × Velocity)^(1/5). Color coding: Green (4+), Red (2-).
      </p>

      {/* Import Modal */}
      <AnimatePresence>
        {showImport && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowImport(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-500" /> Import JSON from LLM
                </h3>
                <button onClick={() => setShowImport(false)} className="text-slate-500 hover:text-white"><X className="w-4 h-4" /></button>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-[10px] text-slate-400 mb-2">Paste the JSON array output from the Venture Architect LLM here. Existing IDs will be updated; new IDs will be added.</p>
                <textarea 
                  className="flex-1 w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                  placeholder='[{"ID": "BI-0001", "Name": "Updated Idea..."}]'
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                />
              </div>
              <div className="p-4 border-t border-slate-800 flex justify-end gap-3 bg-slate-950">
                <button onClick={() => setShowImport(false)} className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">CANCEL</button>
                <button 
                  onClick={handleImport} 
                  disabled={isSaving}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-500 transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {isSaving ? <RefreshCcw className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                  {isSaving ? "SAVING..." : "MERGE & SAVE"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Idea Details Modal */}
      <AnimatePresence>

        {selectedIdea && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedIdea(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-800 flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest">{selectedIdea.ID} — {selectedIdea.Archetype}</span>
                  <h2 className="text-2xl font-bold text-white mt-1">{selectedIdea.Name}</h2>
                </div>
                <button onClick={() => setSelectedIdea(null)} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 space-y-8 overflow-y-auto max-h-[70vh]">
                <section>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Strategic Description</h4>
                  <p className="text-slate-300 leading-relaxed italic border-l-2 border-blue-500/30 pl-4">
                    "{selectedIdea.ProductsServices || "No description provided."}"
                  </p>
                </section>

                <div className="grid grid-cols-2 gap-8">
                  <section>
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Metrics Breakdown</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {[
                        { l: 'F', v: selectedIdea.Feasibility },
                        { l: 'V', v: selectedIdea.Value },
                        { l: 'O', v: selectedIdea.BlueOcean },
                        { l: 'P', v: selectedIdea.Physics },
                        { l: 'S', v: selectedIdea.Velocity }
                      ].map(m => (
                        <div key={m.l} className="text-center bg-slate-950 p-2 rounded border border-slate-800">
                          <div className="text-[9px] text-slate-600 mb-1">{m.l}</div>
                          <div className="text-sm font-bold text-slate-200">{m.v}</div>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Status Analysis</h4>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-md text-xs font-bold border ${getStatusColor(selectedIdea.SavedStatus)}`}>
                        {selectedIdea.SavedStatus}
                      </span>
                      {selectedIdea.Mismatch && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                          <AlertCircle className="w-3 h-3" /> PILLARS MISMATCH
                        </div>
                      )}
                    </div>
                  </section>
                </div>

                <section className="bg-slate-950/50 rounded-xl p-5 border border-slate-800/50">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <TrendingUp className="w-3 h-3" /> Market & Financial Potential
                  </h4>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-[9px] text-slate-600 uppercase font-bold mb-1">TAM Customers</div>
                      <div className="text-sm text-slate-200 font-mono">{selectedIdea.TAM_Customers || "N/A"}</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-600 uppercase font-bold mb-1">Avg Rev / Cust</div>
                      <div className="text-sm text-slate-200 font-mono">{selectedIdea.AvgRevPerCust || "N/A"}</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-600 uppercase font-bold mb-1">TAM (M USD)</div>
                      <div className="text-lg text-blue-400 font-bold font-mono">${selectedIdea.TAM_MUSD || "0"}M</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-900 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[9px] text-slate-600 uppercase font-bold mb-1">Barrier to Entry</div>
                      <div className="text-xs text-slate-400">{selectedIdea.Barrier || "N/A"}</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-600 uppercase font-bold mb-1">Strategic Acquirer</div>
                      <div className="text-xs text-slate-400">{selectedIdea.StrategicAcquirer || "N/A"}</div>
                    </div>
                  </div>
                </section>

                <div className="pt-6 border-t border-slate-800 flex justify-end gap-3">
                  <button 
                    onClick={() => selectedIdea && copyToClipboard([selectedIdea])}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2"
                  >
                    <Copy className="w-3.5 h-3.5" /> Copy Row CSV
                  </button>
                  <button className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-700 transition-colors">
                    Edit Ratings
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-500 transition-colors flex items-center gap-2">
                    Open Strategy Dossier <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
