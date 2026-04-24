/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AppItem } from '../data/apps';
import { ArrowUpRight, Search, Target, Briefcase, GraduationCap, Brain, Compass, LayoutGrid, Users, FileText } from 'lucide-react';

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
      className="group flex flex-col app-card app-card-hover p-7"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#004A99] flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#004A99]" />
        </div>
        <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border shadow-sm ${
          app.status === 'Ativo' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
          app.status === 'Em Manutenção' ? 'bg-amber-50 text-amber-700 border-amber-100' : 
          'bg-slate-100 text-slate-500 border-slate-200'
        }`}>
          {app.status}
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-[#004A99] transition-colors">
          {app.name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          {app.description}
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex gap-3">
            <Target className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Público-alvo</p>
              <p className="text-xs font-semibold text-slate-700 leading-tight">{app.targetAudience}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Briefcase className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Função Principal</p>
              <p className="text-xs font-semibold text-slate-700 leading-tight">{app.mainFunction}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-slate-100">
        <Link 
          to={`/app/${app.id}`}
          className="w-full flex items-center justify-between text-xs font-bold text-slate-900 group/btn"
        >
          <span className="group-hover:text-[#004A99] transition-colors">ACESSAR APLICAÇÃO</span>
          <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover/btn:text-[#004A99] transition-all" />
        </Link>
      </div>
    </motion.div>
  );
}
