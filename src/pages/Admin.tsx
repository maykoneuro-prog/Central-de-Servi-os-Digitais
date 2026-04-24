/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useAppContent } from '../context/AppContext';
import { AppItem, AppCategory } from '../data/apps';
import { Plus, Trash2, Edit2, Save, X, GraduationCap, Brain, Compass, LayoutGrid, Users, Briefcase, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ICON_MAP: Record<string, any> = {
  GraduationCap, Brain, Compass, LayoutGrid, Users, Briefcase, FileText
};

export default function Admin() {
  const { apps, settings, updateApps, updateSettings, logout } = useAppContent();
  const [editingApp, setEditingApp] = useState<AppItem | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleSaveSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    updateSettings({
      portalName: formData.get('portalName') as string,
      portalSubtitle: formData.get('portalSubtitle') as string,
      heroTitle: formData.get('heroTitle') as string,
      heroDescription: formData.get('heroDescription') as string,
    });
    setSaveStatus('Configurações salvas!');
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const confirmDelete = (id: string) => {
    updateApps(apps.filter(a => a.id !== id));
    setDeletingId(null);
  };

  const handleSaveApp = (app: Partial<AppItem>) => {
    if (isAdding) {
      const newApp = {
        ...app,
        id: Math.random().toString(36).substr(2, 9),
      } as AppItem;
      updateApps([...apps, newApp]);
    } else {
      updateApps(apps.map(a => a.id === app.id ? (app as AppItem) : a));
    }
    setEditingApp(null);
    setIsAdding(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Painel de Controle</h1>
            <p className="text-slate-500 font-medium">Personalize a identidade, textos e gerencie o catálogo de aplicações.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => logout()}
              className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-all text-xs"
            >
              Sair
            </button>
            <button 
              onClick={() => { setIsAdding(true); setEditingApp({ id: '', name: '', description: '', targetAudience: '', mainFunction: '', icon: 'Briefcase', category: 'Administrativo', url: '#', status: 'Ativo' }); }}
              className="flex items-center gap-2 px-6 py-3 bg-[#004A99] text-white font-bold rounded-lg hover:bg-[#003366] transition-all shadow-lg shadow-blue-500/10"
            >
              <Plus className="w-4 h-4" />
              Nova Aplicação
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Section */}
          <div className="lg:col-span-1 space-y-8">
            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-[#004A99]" />
                Identidade do Portal
              </h2>
              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Nome Principal (Logo)</label>
                  <input name="portalName" defaultValue={settings.portalName} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Subtítulo (Logo)</label>
                  <input name="portalSubtitle" defaultValue={settings.portalSubtitle} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Título Hero</label>
                  <input name="heroTitle" defaultValue={settings.heroTitle} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Descrição Hero</label>
                  <textarea name="heroDescription" rows={4} defaultValue={settings.heroDescription} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none resize-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  <Save className="w-4 h-4" />
                  Salvar Textos
                </button>
                {saveStatus && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs font-bold text-emerald-600 bg-emerald-50 py-2 rounded-lg border border-emerald-100"
                  >
                    {saveStatus}
                  </motion.p>
                )}
              </form>
            </section>
          </div>

          {/* Apps List Section */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-black">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-900">Catálogo de Aplicações</h2>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{apps.length} APPS TOTAL</span>
              </div>
              <div className="divide-y divide-slate-100">
                {apps.map((app) => (
                  <div key={app.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#004A99]">
                        {(() => { 
                          const Icon = ICON_MAP[app.icon] || Briefcase;
                          return <Icon className="w-5 h-5" />;
                        })()}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{app.name}</h4>
                        <p className="text-xs text-slate-500 font-medium">{app.category} • {app.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {deletingId === app.id ? (
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => confirmDelete(app.id)}
                            className="px-3 py-1.5 bg-red-500 text-white text-[10px] font-bold rounded hover:bg-red-600 transition-colors"
                          >
                            CONFIRMAR
                          </button>
                          <button 
                            onClick={() => setDeletingId(null)}
                            className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded hover:bg-slate-200 transition-colors"
                          >
                            CANCELAR
                          </button>
                        </div>
                      ) : (
                        <>
                          <button 
                            onClick={() => { setEditingApp(app); setIsAdding(false); }}
                            className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => setDeletingId(app.id)}
                            className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Edit/Add Modal Overlay */}
      <AnimatePresence>
        {editingApp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden text-black"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h3 className="font-bold text-slate-900">{isAdding ? 'Nova Aplicação' : 'Editar Aplicação'}</h3>
                <button onClick={() => setEditingApp(null)} className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors"><X className="w-5 h-5" /></button>
              </div>
              
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  handleSaveApp({
                    ...editingApp,
                    name: fd.get('name') as string,
                    description: fd.get('description') as string,
                    url: fd.get('url') as string,
                    category: fd.get('category') as AppCategory,
                    status: fd.get('status') as any,
                    targetAudience: fd.get('targetAudience') as string,
                    mainFunction: fd.get('mainFunction') as string,
                    icon: fd.get('icon') as string || 'Briefcase'
                  });
                }}
                className="p-8 space-y-6 max-h-[70vh] overflow-y-auto"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Nome</label>
                    <input name="name" required defaultValue={editingApp.name} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Categoria</label>
                    <select name="category" defaultValue={editingApp.category} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none appearance-none">
                      <option value="Educacional">Educacional</option>
                      <option value="Administrativo">Administrativo</option>
                      <option value="Apoio">Apoio</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Descrição Curta</label>
                  <input name="description" required defaultValue={editingApp.description} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Público-alvo</label>
                    <input name="targetAudience" required defaultValue={editingApp.targetAudience} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Função Principal</label>
                    <input name="mainFunction" required defaultValue={editingApp.mainFunction} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">URL / Link</label>
                    <input name="url" required defaultValue={editingApp.url} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Status</label>
                    <select name="status" defaultValue={editingApp.status} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none appearance-none">
                      <option value="Ativo">Ativo</option>
                      <option value="Em Manutenção">Em Manutenção</option>
                      <option value="Em Breve">Em Breve</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Ícone</label>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(ICON_MAP).map(iconName => (
                      <label key={iconName} className="cursor-pointer">
                        <input type="radio" name="icon" value={iconName} defaultChecked={editingApp.icon === iconName} className="peer hidden" />
                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-500 transition-all">
                          {(() => { const Icon = ICON_MAP[iconName]; return <Icon className="w-5 h-5" />; })()}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button type="submit" className="flex-1 py-4 bg-[#004A99] text-white font-bold rounded-xl hover:bg-[#003366] transition-all flex items-center justify-center gap-2">
                    <Save className="w-4 h-4" />
                    Salvar Aplicação
                  </button>
                  <button type="button" onClick={() => setEditingApp(null)} className="px-8 py-4 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-all">
                    Cancelar
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
