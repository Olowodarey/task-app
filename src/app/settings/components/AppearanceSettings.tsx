"use client";

import React from 'react';
import { Palette } from 'lucide-react';
import { SettingSection } from './SettingSection';

export const AppearanceSettings: React.FC = () => {
  return (
    <SettingSection title="Appearance Settings" icon={Palette}>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-3">Theme</label>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg">
              <div className="w-4 h-4 bg-gray-900 rounded"></div>
              <span>Dark</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
              <div className="w-4 h-4 bg-white rounded"></div>
              <span>Light</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
              <span>Auto</span>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">Accent Color</label>
          <div className="flex flex-wrap gap-3">
            {['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-orange-500', 'bg-pink-500'].map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full ${color} ${color === 'bg-blue-500' ? 'ring-2 ring-white' : ''} hover:scale-110 transition-transform`}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">Font Size</label>
          <select className="w-full lg:max-w-xs bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-medium">Reduced Motion</h3>
            <p className="text-gray-400 text-sm">Minimize animations and transitions</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </SettingSection>
  );
};
