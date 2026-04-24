/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { useAppContent } from '../context/AppContext';

export default function Hero() {
  const { settings } = useAppContent();

  const words = settings.heroTitle.split(' ');
  const lastWord = words.pop();
  const mainTitle = words.join(' ');

  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100/50 rounded-full text-[10px] font-bold text-blue-700 mb-8 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            Portal Institucional • {settings.portalSubtitle}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8 text-slate-900 leading-[1.1]">
            {mainTitle} <span className="text-blue-700 block md:inline font-bold">{lastWord}</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl font-light">
            {settings.heroDescription}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#apps" 
              className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/10 active:scale-95"
            >
              Acessar Catálogo
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all text-sm">
              Suporte Técnico
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative element - subtle grid pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-[0.03] overflow-hidden hidden lg:block">
        <div className="grid grid-cols-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-r border-b border-slate-900 aspect-square" />
          ))}
        </div>
      </div>
    </section>
  );
}
