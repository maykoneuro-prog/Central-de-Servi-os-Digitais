/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { useAppContent } from '../context/AppContext';

export default function Hero() {
  const { settings } = useAppContent();

  const titleWords = settings.heroTitle.split(' ');
  const lastWord = titleWords.pop();
  const restOfTitle = titleWords.join(' ');

  return (
    <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded text-[10px] font-bold text-[#004A99] mb-8 uppercase tracking-[0.2em]">
          Ambiente Oficial {settings.portalName} {settings.portalSubtitle}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-slate-900 leading-tight">
          {restOfTitle} <br />
          <span className="text-[#004A99]">{lastWord}</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg mb-10 leading-relaxed">
          {settings.heroDescription}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#apps" className="w-full sm:w-auto px-8 py-3.5 bg-[#004A99] text-white font-bold rounded-lg hover:bg-[#003366] transition-all flex items-center justify-center gap-2">
            Ver Todas as Aplicações
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-all">
            Suporte ao Usuário
          </button>
        </div>
      </motion.div>
    </section>
  );
}
