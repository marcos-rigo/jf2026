'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import IntroSection from '@/components/ciudadania-digital/intro-section';
import Paso1Section from '@/components/ciudadania-digital/paso1-section';
import Paso2Section from '@/components/ciudadania-digital/paso2-section';
import Paso3Section from '@/components/ciudadania-digital/paso3-section';
import HerramientasSection from '@/components/ciudadania-digital/herramientas-section';

type TabType = 'intro' | 'paso1' | 'paso2' | 'paso3' | 'herramientas';

export default function CiudadaniaDigitalContent() {
  const [activeTab, setActiveTab] = useState<TabType>('intro');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [isScrolling, setIsScrolling] = useState(false);

  // Load checked items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ciudadania-digital-checklist');
    if (saved) {
      setCheckedItems(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save checked items to localStorage
  useEffect(() => {
    localStorage.setItem('ciudadania-digital-checklist', JSON.stringify(Array.from(checkedItems)));
  }, [checkedItems]);

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsScrolling(false), 400);
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const newChecked = new Set(checkedItems);
    if (checked) {
      newChecked.add(id);
    } else {
      newChecked.delete(id);
    }
    setCheckedItems(newChecked);
  };

  // Navigation sidebar buttons config
  const navItems: { id: TabType; label: string; number: string; color: string }[] = [
    { id: 'intro', label: 'Inicio', number: '00', color: 'text-[#00F0FF]' },
    { id: 'paso1', label: 'Seguridad', number: '01', color: 'text-[#00F0FF]' },
    { id: 'paso2', label: 'Netiqueta', number: '02', color: 'text-[#8B5CF6]' },
    { id: 'paso3', label: 'IA y Bulos', number: '03', color: 'text-[#F59E0B]' },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col md:flex-row relative overflow-x-hidden text-slate-300 bg-brand-dark">
        {/* Grid de fondo */}
        <div className="fixed inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] pointer-events-none opacity-20 z-0" />

        {/* Navegación Lateral */}
        <nav className="w-full md:w-72 pt-20 md:pt-24 backdrop-blur-xl bg-[#141A28]/70 border-r border-slate-800 flex flex-col shadow-2xl md:min-h-screen shrink-0 relative z-10">
          <div className="p-8 border-b border-slate-800/50 bg-slate-900/50">
            <h1 className="text-2xl font-bold text-white flex items-center gap-3 font-display">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F0FF] to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <span className="text-xl">🛡️</span>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                C-Digital
              </span>
            </h1>
            <p className="text-xs text-[#00F0FF] mt-3 font-mono tracking-widest uppercase opacity-80">
              Kit de Acción v2.0
            </p>
          </div>

          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible p-4 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`tab-btn w-full text-left px-5 py-4 rounded-xl font-medium transition-all whitespace-nowrap md:whitespace-normal border-l-2 font-sans ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-[#00F0FF]/20 to-transparent border-l-[#00F0FF] text-white'
                    : 'hover:bg-slate-800/50 text-slate-400 hover:text-white border-l-transparent hover:border-l-slate-600'
                }`}
              >
                <span className={`opacity-70 mr-2 text-sm ${item.color}`}>{item.number}</span>
                {item.label}
              </button>
            ))}

            <div className="md:mt-auto pt-4 md:pt-8 md:border-t border-slate-800/50">
              <button
                onClick={() => handleNavigate('herramientas')}
                className={`tab-btn w-full text-left px-5 py-4 rounded-xl font-medium transition-all whitespace-nowrap md:whitespace-normal border font-sans ${
                  activeTab === 'herramientas'
                    ? 'bg-slate-800 text-white border-[#00F0FF]/50'
                    : 'bg-slate-800/40 hover:bg-slate-800 text-slate-300 border-slate-700 hover:border-[#00F0FF]/50'
                } flex items-center gap-2 group`}
              >
                <span className="text-lg group-hover:rotate-12 transition-transform">🛠️</span>
                Centro de Control
              </button>
            </div>
          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="flex-1 p-6 md:pt-24 md:px-12 md:pb-12 max-w-6xl mx-auto w-full overflow-y-auto relative z-10">
          <AnimatePresence mode="wait">
            {activeTab === 'intro' && <IntroSection key="intro" onNavigate={handleNavigate} />}
            {activeTab === 'paso1' && <Paso1Section key="paso1" onNavigate={handleNavigate} />}
            {activeTab === 'paso2' && <Paso2Section key="paso2" onNavigate={handleNavigate} />}
            {activeTab === 'paso3' && <Paso3Section key="paso3" onNavigate={handleNavigate} />}
            {activeTab === 'herramientas' && (
              <HerramientasSection
                key="herramientas"
                onNavigate={handleNavigate}
                checkedItems={checkedItems}
                onCheckboxChange={handleCheckboxChange}
              />
            )}
          </AnimatePresence>
        </main>
      </div>

      <Footer />
    </>
  );
}
