'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { useState } from 'react';
import NavBar from "./components/Navigations/Topnav";
import Sidenavbar from "./components/Navigations/Sidenavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Task Manager",
//   description: "A modern task management application",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  
          <div className="flex h-screen w-full overflow-hidden">
            <Sidenavbar 
              isOpen={isSidebarOpen}
              onClose={closeSidebar}
            />
            <div className="flex-1 flex flex-col overflow-hidden">
              <NavBar onMenuClick={toggleSidebar} />
              <main className="flex-1 bg-background overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
      
      </body>
    </html>
  );
}
