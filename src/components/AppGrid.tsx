/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { AppCategory } from '../data/apps';
import AppCard from './AppCard';
import { useState } from 'react';
import { useAppContent } from '../context/AppContext';

const CATEGORIES: (AppCategory | 'Todos')[] = ['Todos', 'Educacional', 'Administrativo', 'Apoio'];

export default function AppGrid() {
  const { apps } = useAppContent();
  const [activeCategory, setActiveCategory] = useState<(AppCategory | 'Todos')>('Todos');

  const filteredApps = activeCategory === 'Todos' 
    ? apps 
    : apps.filter(app => app.category === activeCategory);

  return (
    <section id="apps" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="text-left">
          <h2 className="text-3xl font-display font-bold mb-3 text-slate-900 tracking-tight underline decoration-[#004A99]/20 decoration-8 underline-offset-[-2px]">
            Aplicações Disponíveis
          </h2>
          <p className="text-slate-500 max-w-lg text-sm font-medium">
            Selecione uma das categorias abaixo para filtrar os serviços digitais integrados ao ecossistema SESI Pernambuco.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl self-start md:self-end">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-white text-[#004A99] shadow-sm' 
                : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        key={activeCategory}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </motion.div>
    </section>
  );
}
