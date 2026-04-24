/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LucideIcon, GraduationCap, Brain, Compass, LayoutGrid, Users, Briefcase, FileText } from 'lucide-react';

export type AppCategory = 'Administrativo' | 'Educacional' | 'Apoio';

export interface AppItem {
  id: string;
  name: string;
  description: string;
  targetAudience: string; // Público-alvo
  mainFunction: string;   // Função principal
  icon: string;
  category: AppCategory;
  url: string;
  status: 'Ativo' | 'Em Manutenção' | 'Em Breve';
}

export const AI_APPS: AppItem[] = [
  {
    id: 'sge',
    name: 'SGE - Gestão Escolar',
    description: 'Portal centralizado para controle de notas, frequências e registros acadêmicos das unidades SESI PE.',
    targetAudience: 'Secretarias, Professores e Gestores',
    mainFunction: 'Gestão Pedagógica Acadêmica',
    icon: 'GraduationCap',
    category: 'Educacional',
    url: '#',
    status: 'Ativo',
  },
  {
    id: 'psicologia',
    name: 'PsyClinic Online',
    description: 'Plataforma para acompanhamento psicopedagógico e clínico da rede de ensino.',
    targetAudience: 'Psicólogos e Psicopedagogos',
    mainFunction: 'Acompanhamento de Saúde Mental',
    icon: 'Brain',
    category: 'Apoio',
    url: '#',
    status: 'Ativo',
  },
  {
    id: 'planejamento',
    name: 'SESI Planeja',
    description: 'Ferramenta de planejamento estratégico para monitoramento de OKRs e metas de produtividade.',
    targetAudience: 'Lideranças e Setor Administrativo',
    mainFunction: 'Planejamento e Qualidade',
    icon: 'Briefcase',
    category: 'Administrativo',
    url: '#',
    status: 'Ativo',
  },
  {
    id: 'portal-aluno',
    name: 'Portal do Aluno',
    description: 'Acesso rápido a boletins, horários e ambiente virtual de aprendizagem.',
    targetAudience: 'Alunos e Responsáveis',
    mainFunction: 'Consulta e Interação Acadêmica',
    icon: 'Users',
    category: 'Educacional',
    url: '#',
    status: 'Ativo',
  },
  {
    id: 'financeiro',
    name: 'Painel Financeiro',
    description: 'Visualização de indicadores de receita e despesas operacionais por unidade.',
    targetAudience: 'Setor Financeiro e Controller',
    mainFunction: 'Gestão Financeira Consolidada',
    icon: 'FileText',
    category: 'Administrativo',
    url: '#',
    status: 'Em Breve',
  },
];
