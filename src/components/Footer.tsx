/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-[#004A99]">SESI</span>
                <span className="text-[10px] font-bold text-slate-400 -mt-1 leading-none uppercase tracking-[0.15em]">Pernambuco</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Modernizando a gestão educacional e administrativa através de soluções digitais integradas e seguras.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-6 text-slate-900 uppercase tracking-widest font-display">Acessos Rápidos</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              <li><a href="#" className="hover:text-[#004A99] transition-colors font-semibold">Webmail Corporativo</a></li>
              <li><a href="#" className="hover:text-[#004A99] transition-colors font-semibold">Suporte de TI</a></li>
              <li><a href="#" className="hover:text-[#004A99] transition-colors font-semibold">Recursos Humanos</a></li>
              <li><a href="#" className="hover:text-[#004A99] transition-colors font-semibold">Portal do Colaborador</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-6 text-slate-900 uppercase tracking-widest font-display">Transparência</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              <li><a href="#" className="hover:text-[#004A99] transition-colors font-semibold">LGPD</a></li>
              <li><a href="#" className="hover:text-[#004A99] transition-colors font-semibold">Compliance</a></li>
              <li><a href="#" className="hover:text-[#004A99] transition-colors font-semibold">Políticas de Segurança</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-6 text-slate-900 uppercase tracking-widest font-display">Localização</h4>
            <div className="text-xs text-slate-500 space-y-2 font-medium">
              <p>Av. Cruz Cabugá, 1111 - Santo Amaro</p>
              <p>Recife - PE, CEP: 50040-000</p>
              <p className="pt-4 font-bold text-[#004A99]">(81) 3412-8330</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-slate-400 text-xs gap-4 font-medium">
          <p>© 2026 SESI Pernambuco - Central de Serviços Digitais. Unidade de Tecnologia e Inovação.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#004A99] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#004A99] transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
