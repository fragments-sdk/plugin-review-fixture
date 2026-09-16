import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@usefragments/ui/styles';
import '../design/tokens.css';
import { SettingsPage } from './SettingsPage';
createRoot(document.getElementById('root')!).render(<StrictMode><SettingsPage /></StrictMode>);
