"use client";

import React from 'react';
import { Mic } from 'lucide-react';
import { SettingSection, ToggleSetting } from './SettingSection';

export const VoiceCommandsSettings: React.FC = () => (
  <SettingSection title="Voice Commands Settings" icon={Mic}>
    <div className="space-y-6">
      <ToggleSetting 
        title="Enable Voice Commands"
        description="Control the app using voice commands"
      />

      <div>
        <label className="block text-sm font-medium mb-3">Wake Word</label>
        <input
          type="text"
          defaultValue="Hey Assistant"
          className="w-full lg:max-w-xs bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">Language</label>
        <select className="w-full lg:max-w-xs bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>English (US)</option>
          <option>English (UK)</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>
      </div>

      <div className="bg-gray-700 rounded-lg p-4">
        <h3 className="font-medium mb-3">Available Commands</h3>
        <div className="space-y-2 text-sm">
          {[
            { command: "Add new task", active: true },
            { command: "Show my schedule", active: true },
            { command: "Mark task complete", active: true },
            { command: "Set reminder", active: false },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-300">"{item.command}"</span>
              <span className={`text-xs ${item.active ? 'text-blue-400' : 'text-gray-500'}`}>
                {item.active ? '✓ Active' : '✗ Inactive'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SettingSection>
);
