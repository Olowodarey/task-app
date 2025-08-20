"use client";

import React from 'react';
import { Bot } from 'lucide-react';
import { SettingSection } from './SettingSection';

const ToggleSetting: React.FC<{
  title: string;
  description: string;
  defaultChecked?: boolean;
}> = ({ title, description, defaultChecked = false }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    </label>
  </div>
);

export const AIIntegrationSettings: React.FC = () => (
  <SettingSection title="AI Integration Settings" icon={Bot}>
    <div className="space-y-6">
      <ToggleSetting 
        title="Enable AI Assistant"
        description="Allow AI to help with task management and suggestions"
        defaultChecked
      />
      <ToggleSetting 
        title="Smart Scheduling"
        description="Let AI optimize your task scheduling"
        defaultChecked
      />
      <div>
        <label className="block text-sm font-medium mb-3">AI Response Style</label>
        <select className="w-full lg:max-w-xs bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>Concise</option>
          <option>Detailed</option>
          <option>Casual</option>
          <option>Professional</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-3">Learning Level</label>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>Basic</span>
          <span>Advanced</span>
        </div>
      </div>
    </div>
  </SettingSection>
);
