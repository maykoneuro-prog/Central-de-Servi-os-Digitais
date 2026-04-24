/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, LayoutDashboard } from 'lucide-react';
import { useAppContent } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { settings, isAuthenticated, logout } = useAppContent();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200/50"
    >
      <Link to="/" className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="font-display text-lg font-bold tracking-tight text-blue-900 leading-none mb-1">
            {settings.portalName}
          </span>
          <span className="text-[9px] font-black text-blue-700/60 uppercase tracking-[0.2em] leading-none">
            {settings.portalSubtitle}
          </span>
        </div>
        <div className="h-6 w-px bg-slate-200 shrink-0 mx-1" />
        <span className="hidden sm:block text-slate-400 font-medium text-xs">Serviços Digitais</span>
      </Link>
      
      <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
        <Link to="/" className="hover:text-blue-700 transition-colors">Catálogo</Link>
        <Link to="/admin" className="hover:text-blue-700 transition-colors">Administração</Link>
        <a href="https://sesipe.org.br" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition-colors">Institucional</a>
      </div>

      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-[10px] font-bold text-slate-900">Admin Portal</span>
              <span className="text-[9px] text-slate-400">Authenticated</span>
            </div>
            <button 
              onClick={() => logout()}
              className="px-4 py-2 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg hover:bg-slate-200 transition-all border border-slate-200"
            >
              Logar Out
            </button>
          </div>
        ) : (
          <Link 
            to="/login"
            className="px-5 py-2.5 bg-blue-700 text-white text-[10px] font-bold rounded-lg hover:bg-blue-800 transition-all shadow-sm shadow-blue-900/10 active:scale-95"
          >
            Acesso Corporativo
          </Link>
        )}
      </div>
    </motion.nav>
  );
}
