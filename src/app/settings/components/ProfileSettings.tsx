"use client";

import React from 'react';
import { User, Camera } from 'lucide-react';
import { SettingSection } from './SettingSection';

export const ProfileSettings: React.FC = () => {
  return (
    <SettingSection title="Profile Settings" icon={User}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <div className="relative">
          <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center text-2xl font-bold text-gray-300">
            JD
          </div>
          <button className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 hover:bg-blue-700 transition-colors">
            <Camera size={16} />
          </button>
        </div>
        <div className="sm:ml-6">
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-400">john.doe@example.com</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            defaultValue="John Doe"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            defaultValue="john.doe@example.com"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Timezone</label>
        <select className="w-full lg:max-w-xs bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>Eastern Time (ET)</option>
          <option>Central Time (CT)</option>
          <option>Mountain Time (MT)</option>
          <option>Pacific Time (PT)</option>
        </select>
      </div>
    </SettingSection>
  );
};
