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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-white/90 backdrop-blur-md border-b border-slate-200"
    >
      <Link to="/" className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="font-display text-xl font-bold tracking-tight text-[#004A99]">{settings.portalName}</span>
          <span className="text-[10px] font-bold text-slate-400 -mt-1 leading-none uppercase tracking-[0.15em]">{settings.portalSubtitle}</span>
        </div>
        <div className="h-8 w-px bg-slate-200" />
        <span className="hidden sm:block text-slate-500 font-medium text-sm">Central de Serviços Digitais</span>
      </Link>
      
      <div className="hidden lg:flex items-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
        <Link to="/" className="hover:text-[#004A99] transition-colors">Início</Link>
        <a href="#apps" className="hover:text-[#004A99] transition-colors">Aplicações</a>
        <a href="#" className="hover:text-[#004A99] transition-colors">Governança</a>
        {isAuthenticated ? (
           <Link to="/admin" className="hover:text-[#004A99] transition-colors flex items-center gap-1.5 ring-1 ring-blue-100 bg-blue-50/50 px-2.5 py-1.5 rounded-lg">
           <LayoutDashboard className="w-3.5 h-3.5" />
           Painel Admin
         </Link>
        ) : (
          <Link to="/login" className="hover:text-[#004A99] transition-colors flex items-center gap-1.5 ring-1 ring-slate-100 px-2.5 py-1.5 rounded-lg">
            <LayoutDashboard className="w-3.5 h-3.5" />
            Acesso Restrito
          </Link>
        )}
      </div>

      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <button 
            onClick={() => logout()}
            className="px-5 py-2.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-all border border-slate-200"
          >
            Sair do Sistema
          </button>
        ) : (
          <button className="px-5 py-2.5 bg-[#004A99] text-white text-xs font-bold rounded-lg hover:bg-[#003366] transition-all shadow-sm">
            Acesso Unificado (SSO)
          </button>
        )}
      </div>
    </motion.nav>
  );
}
