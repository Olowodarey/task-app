"use client";

import React, { useState } from 'react';
import { User, Palette, Bot, Mic, Bell, Shield, Menu, X } from 'lucide-react';
import { ProfileSettings } from './components/ProfileSettings';
import { AppearanceSettings } from './components/AppearanceSettings';
import { AIIntegrationSettings } from './components/AIIntegrationSettings';
import { VoiceCommandsSettings } from './components/VoiceCommandsSettings';
import { NotificationsSettings } from './components/NotificationsSettings';
import { PrivacySettings } from './components/PrivacySettings';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarItems: SidebarItem[] = [
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette size={20} /> },
    { id: 'ai-integration', label: 'AI Integration', icon: <Bot size={20} /> },
    { id: 'voice-commands', label: 'Voice Commands', icon: <Mic size={20} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
    { id: 'privacy', label: 'Privacy & Data', icon: <Shield size={20} /> },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSettings />;
      case 'appearance':
        return <AppearanceSettings />;
      case 'ai-integration':
        return <AIIntegrationSettings />;
      case 'voice-commands':
        return <VoiceCommandsSettings />;
      case 'notifications':
        return <NotificationsSettings />;
      case 'privacy':
        return <PrivacySettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-4 md:p-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Settings</h1>
            <p className="text-gray-400 text-sm hidden sm:block">Configure your preferences and integrations</p>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden bg-gray-800 p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className="flex relative">
        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50 lg:z-0
          w-64 p-4 md:p-6 bg-gray-900 lg:bg-transparent
          transform transition-transform duration-300 ease-in-out lg:transform-none
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          {/* Mobile header in sidebar */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6">
          {renderContent()}
          
          {/* Save Button */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-end">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
              <span>Save Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
