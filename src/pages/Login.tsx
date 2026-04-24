/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContent } from '../context/AppContext';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login, settings } = useAppContent();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-blue-50 text-[#004A99] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-display font-bold text-slate-900 mb-2">Acesso Restrito</h1>
            <p className="text-slate-500 text-sm font-medium">Autenticação necessária para gerenciar o portal administrativo do {settings.portalName} {settings.portalSubtitle}.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Chave de Acesso</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className={`w-full px-5 py-4 bg-slate-50 border ${error ? 'border-red-300 ring-4 ring-red-500/10' : 'border-slate-200'} rounded-xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-300`}
                required
              />
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-lg border border-red-100 text-xs font-bold"
              >
                <AlertCircle className="w-4 h-4" />
                Senha administrativa incorreta.
              </motion.div>
            )}

            <button 
              type="submit"
              className="w-full py-4 bg-[#004A99] text-white font-bold rounded-xl hover:bg-[#003366] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 active:scale-95"
            >
              Entrar no Painel
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-8 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Uso Institucional e Monitorado
          </p>
        </motion.div>
      </div>
    </div>
  );
}
