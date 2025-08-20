"use client";

import React from 'react';
import { Shield } from 'lucide-react';
import { SettingSection, ToggleSetting } from './SettingSection';

export const PrivacySettings: React.FC = () => (
  <SettingSection title="Privacy & Data Settings" icon={Shield}>
    <div className="space-y-6">
      <ToggleSetting 
        title="Data Collection"
        description="Allow collection of usage data to improve the app"
        defaultChecked
      />

      <ToggleSetting 
        title="Analytics"
        description="Share anonymous usage statistics"
      />

      <div>
        <label className="block text-sm font-medium mb-3">Data Retention</label>
        <select className="w-full lg:max-w-xs bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>30 days</option>
          <option>90 days</option>
          <option>1 year</option>
          <option>Forever</option>
        </select>
      </div>

      <div className="bg-red-900 border border-red-500 rounded-lg p-4">
        <h3 className="font-medium text-red-400 mb-2">Danger Zone</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Export My Data
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Delete All Data
          </button>
        </div>
      </div>
    </div>
  </SettingSection>
);
