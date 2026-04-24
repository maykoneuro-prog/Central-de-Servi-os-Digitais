/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { AppCategory } from '../data/apps';
import AppCard from './AppCard';
import { useState } from 'react';
import { useAppContent } from '../context/AppContext';
import { Search, LayoutGrid } from 'lucide-react';

export default function AppGrid() {
  const { apps } = useAppContent();

  return (
    <section id="apps" className="pb-24 pt-8 px-6 max-w-7xl mx-auto">
      {/* Grid */}
      <motion.div 
        layout
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </AnimatePresence>
      </motion.div>

      {apps.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-32 bg-white border border-dashed border-slate-300 rounded-3xl"
        >
          <p className="text-slate-500 font-medium">Nenhum sistema disponível no momento.</p>
        </motion.div>
      )}
    </section>
  );
}
