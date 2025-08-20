"use client";

import React from 'react';
import { Bell } from 'lucide-react';
import { SettingSection, ToggleSetting } from './SettingSection';

export const NotificationsSettings: React.FC = () => (
  <SettingSection title="Notification Settings" icon={Bell}>
    <div className="space-y-6">
      <ToggleSetting 
        title="Push Notifications"
        description="Receive notifications on your device"
        defaultChecked
      />

      <ToggleSetting 
        title="Task Reminders"
        description="Get reminded about upcoming tasks"
        defaultChecked
      />

      <ToggleSetting 
        title="Email Notifications"
        description="Receive weekly productivity reports"
      />

      <div>
        <label className="block text-sm font-medium mb-3">Quiet Hours</label>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">From</label>
            <input
              type="time"
              defaultValue="22:00"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">To</label>
            <input
              type="time"
              defaultValue="08:00"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">Notification Sound</label>
        <select className="w-full lg:max-w-xs bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>Default</option>
          <option>Gentle Bell</option>
          <option>Soft Chime</option>
          <option>None</option>
        </select>
      </div>
    </div>
  </SettingSection>
);
