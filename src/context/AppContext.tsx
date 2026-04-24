/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppItem, AI_APPS } from '../data/apps';

interface AppSettings {
  portalName: string;
  portalSubtitle: string;
  heroTitle: string;
  heroDescription: string;
}

interface AppContextType {
  apps: AppItem[];
  settings: AppSettings;
  isAuthenticated: boolean;
  updateApps: (newApps: AppItem[]) => void;
  updateSettings: (newSettings: AppSettings) => void;
  login: (password: string) => boolean;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEFAULT_SETTINGS: AppSettings = {
  portalName: 'SESI',
  portalSubtitle: 'Pernambuco',
  heroTitle: 'Central de Serviços Digitais',
  heroDescription: 'Ponto único de entrada para todas as aplicações institucionais do SESI Pernambuco. Acesse portais educacionais, administrativos e de suporte com segurança e agilidade.',
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [apps, setApps] = useState<AppItem[]>(() => {
    const saved = localStorage.getItem('sesi_apps');
    return saved ? JSON.parse(saved) : AI_APPS;
  });

  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('sesi_settings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('sesi_auth') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('sesi_apps', JSON.stringify(apps));
  }, [apps]);

  useEffect(() => {
    localStorage.setItem('sesi_settings', JSON.stringify(settings));
  }, [settings]);

  const updateApps = (newApps: AppItem[]) => setApps(newApps);
  const updateSettings = (newSettings: AppSettings) => setSettings(newSettings);
  
  const login = (password: string) => {
    // Mock password for institutional portal
    if (password === 'sesipe2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('sesi_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('sesi_auth');
  };

  return (
    <AppContext.Provider value={{ apps, settings, isAuthenticated, updateApps, updateSettings, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContent() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContent must be used within an AppProvider');
  return context;
}
