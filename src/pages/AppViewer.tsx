/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, useNavigate } from 'react-router-dom';
import { useAppContent } from '../context/AppContext';
import { ChevronLeft, ExternalLink, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function AppViewer() {
  const { id } = useParams<{ id: string }>();
  const { apps } = useAppContent();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const app = apps.find(a => a.id === id);

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Aplicação não encontrada</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-[#004A99] font-bold hover:underline"
          >
            Voltar ao Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-slate-900">
      {/* Header de Visualização */}
      <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-[#004A99] transition-colors group"
          >
            <div className="p-1.5 rounded-lg group-hover:bg-blue-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold hidden md:inline">Portal SESI</span>
          </button>
          
          <div className="h-6 w-px bg-slate-200 mx-1" />
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center">
               <span className="text-[#004A99] text-xs font-black">{app.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-none mb-0.5">{app.name}</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{app.category}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.location.reload()}
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            title="Recarregar aplicação"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <a 
            href={app.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#004A99] text-white text-xs font-bold rounded-lg hover:bg-[#003366] transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Abrir em Nova Aba</span>
          </a>
        </div>
      </header>

      {/* Container do Iframe */}
      <div className="flex-1 relative bg-slate-100">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-blue-100 border-t-[#004A99] rounded-full animate-spin" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Carregando Sistema...</p>
            </div>
          </div>
        )}
        
        {app.url === '#' || app.url === '' ? (
          <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
            <div className="max-w-md">
              <div className="w-16 h-16 bg-blue-50 text-[#004A99] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 opacity-20" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Ambiente de Demonstração</h2>
              <p className="text-slate-500 text-sm">Esta aplicação está em fase de homologação. A URL real será configurada pela TI SESI quando o ambiente de produção estiver disponível.</p>
            </div>
          </div>
        ) : (
          <iframe 
            src={app.url}
            className="w-full h-full border-none shadow-inner"
            onLoad={() => setLoading(false)}
            title={app.name}
          />
        )}
      </div>
    </div>
  );
}
