/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AppItem } from '../data/apps';
import { ArrowUpRight, Target, Briefcase, GraduationCap, Brain, Compass, LayoutGrid, Users, FileText } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  GraduationCap, Brain, Compass, LayoutGrid, Users, Briefcase, FileText
};

interface AppCardProps {
  app: AppItem;
}

export default function AppCard({ app }: AppCardProps) {
  const Icon = ICON_MAP[app.icon] || Briefcase;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
      }}
      className="institutional-card group flex flex-col h-full overflow-hidden"
    >
      {/* Top Section with Icon and Status */}
      <div className="p-6 pb-0 flex items-start justify-between">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7" />
        </div>
        <div className={`status-badge ${
          app.status === 'Ativo' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 
          app.status === 'Em Manutenção' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
          'bg-slate-100 text-slate-500 border border-slate-200'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${
            app.status === 'Ativo' ? 'bg-emerald-500 animate-pulse' : 
            app.status === 'Em Manutenção' ? 'bg-amber-500' : 'bg-slate-400'
          }`} />
          {app.status}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1">
        <div className="mb-4">
          <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest mb-1 block">
            {app.category}
          </span>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
            {app.name}
          </h3>
        </div>
        
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed h-10">
          {app.description}
        </p>

        {/* Feature Tags */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-medium text-slate-400 mr-1">Público:</span>
            <span className="text-slate-900 font-semibold truncate">{app.targetAudience}</span>
          </div>
          <div className="flex items-start gap-3 text-xs text-slate-600">
            <Target className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
            <span className="font-medium text-slate-400 mr-1 shrink-0">Foco:</span>
            <span className="text-slate-900 font-semibold line-clamp-1">{app.mainFunction}</span>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto">
        <Link 
          to={`/app/${app.id}`}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all group/btn shadow-sm"
        >
          Acessar Sistema
          <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
