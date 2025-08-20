"use client";

import React from 'react';
import { SettingSectionProps } from '../types';

export const ToggleSetting: React.FC<{
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
      <input 
        type="checkbox" 
        defaultChecked={defaultChecked} 
        className="sr-only peer" 
      />
      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    </label>
  </div>
);

export const SettingSection: React.FC<SettingSectionProps> = ({
  title,
  icon: Icon,
  children,
  className = '',
}) => {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 md:p-6 ${className}`}>
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        <Icon className="mr-2" size={24} />
        {title}
      </h2>
      {children}
    </div>
  );
};
