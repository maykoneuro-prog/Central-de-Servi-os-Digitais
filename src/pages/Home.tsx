/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AppGrid from '../components/AppGrid';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="atmosphere" />
      
      <Navbar />
      
      <main>
        <Hero />
        
        <AppGrid />
        
        {/* Overview Section */}
        <section className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#004A99] opacity-10 skew-x-12 translate-x-32" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 leading-tight">
                Governança e <br />
                <span className="text-[#0084FF]">Unificação Digital</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#004A99]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Single Source of Truth</h4>
                    <p className="text-slate-400 text-sm">Elimine a confusão de múltiplos domínios e centralize o acesso institucional.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#004A99]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Preparado para SSO</h4>
                    <p className="text-slate-400 text-sm">Arquitetura pronta para integração com diretórios de acesso único (Microsoft/Google).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#004A99]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Escalabilidade Nativa</h4>
                    <p className="text-slate-400 text-sm">Novos serviços podem ser integrados via API ou redirectionamento transparente.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Integrando</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl translate-y-8">
                <div className="text-3xl font-bold text-emerald-400 mb-1">Online</div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Status Rede</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl font-bold text-amber-400 mb-1">+20</div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Unidades SESI</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl translate-y-8">
                <div className="text-3xl font-bold text-indigo-400 mb-1">AES-256</div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Criptografia</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto border-2 border-[#004A99]/10 p-12 md:p-20 rounded-[40px] text-center relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 text-slate-900 tracking-tight">
                Consolidação Tecnológica do <br /> 
                <span className="text-[#004A99]">SESI Pernambuco</span>
              </h2>
              <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
                Estamos construindo um ambiente digital mais simples, integrado e pautado na excelência operacional.
              </p>
              <Link to="/admin" className="inline-block px-12 py-4 bg-[#004A99] text-white font-bold rounded-lg hover:bg-[#003366] transition-all shadow-xl shadow-blue-900/10 active:scale-95 text-center">
                Acessar Área Administrativa
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
