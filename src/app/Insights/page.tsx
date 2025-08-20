// pages/index.tsx or app/page.tsx (depending on your Next.js version)
import React from 'react';
import Head from 'next/head';

const ProductivityDashboard: React.FC = () => {
  return (
    <>
      <Head>
        <title>Insights & Analytics</title>
        <meta name="description" content="Track your productivity and performance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="flex justify-between items-center p-6 border-b border-gray-700">
          <div>
            <h1 className="text-2xl font-bold">Insights & Analytics</h1>
            <p className="text-gray-400 text-sm">Track your productivity and performance</p>
          </div>
          <div className="text-gray-400 text-sm">LAST 7 DAYS</div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Productivity Score */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-semibold">Productivity Score</h2>
            </div>
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-bold text-blue-400">92%</span>
              <div className="ml-4 bg-blue-500 h-3 w-16 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm">Based on task completion rate and consistency</p>
            <div className="text-right text-gray-400 text-xs mt-2">+8% from previous week</div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-1">Total Tasks</div>
              <div className="text-2xl font-bold">36</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-1">Completion Rate</div>
              <div className="text-2xl font-bold">91%</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-1">Current Streak</div>
              <div className="text-2xl font-bold">12 days</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-1">Best Streak</div>
              <div className="text-2xl font-bold">28 days</div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Tasks Completed Over Time */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Tasks Completed Over Time
              </h3>
              <div className="relative h-48">
                <svg viewBox="0 0 400 150" className="w-full h-full">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 20 120 Q 50 100 80 90 Q 120 70 160 65 Q 200 55 240 60 Q 280 65 320 50 Q 350 40 380 35"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M 20 120 Q 50 100 80 90 Q 120 70 160 65 Q 200 55 240 60 Q 280 65 320 50 Q 350 40 380 35 L 380 150 L 20 150 Z"
                    fill="url(#gradient)"
                  />
                </svg>
              </div>
            </div>

            {/* Task Category Distribution */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                Task Category Distribution
              </h3>
              <div className="flex justify-center items-center h-48">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      stroke="#3B82F6"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray="65 100"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      stroke="#10B981"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray="20 100"
                      strokeDashoffset="-65"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      stroke="#F59E0B"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray="10 100"
                      strokeDashoffset="-85"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      stroke="#EF4444"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray="5 100"
                      strokeDashoffset="-95"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-4 text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span>Work
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>Personal
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></span>Learning
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>Other
                </div>
              </div>
            </div>
          </div>

          {/* Productivity Trends */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Productivity Trends
            </h3>
            <div className="relative h-32">
              <svg viewBox="0 0 800 100" className="w-full h-full">
                <path
                  d="M 50 70 Q 100 60 150 65 Q 200 55 250 50 Q 300 45 350 55 Q 400 65 450 60 Q 500 50 550 45 Q 600 40 650 35 Q 700 30 750 25"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Data points */}
                {[50, 150, 250, 350, 450, 550, 650, 750].map((x, i) => (
                  <circle
                    key={i}
                    cx={x}
                    cy={70 - i * 5}
                    r="3"
                    fill="#3B82F6"
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Weekly Performance */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Weekly Performance
            </h3>
            <div className="flex space-x-2">
              {[
                { day: 'Mon', value: 8, color: 'bg-red-500' },
                { day: 'Tue', value: 3, color: 'bg-red-500' },
                { day: 'Wed', value: 6, color: 'bg-yellow-500' },
                { day: 'Thu', value: 1, color: 'bg-red-500' },
                { day: 'Fri', value: 3, color: 'bg-red-500' },
                { day: 'Sat', value: 7, color: 'bg-orange-500' },
                { day: 'Sun', value: 9, color: 'bg-green-500' }
              ].map((item, index) => (
                <div key={index} className="flex-1">
                  <div className={`${item.color} h-12 rounded flex items-center justify-center text-white font-semibold`}>
                    {item.value}%
                  </div>
                  <div className="text-center text-gray-400 text-xs mt-1">{item.day}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
              Key Insights
            </h3>
            <div className="space-y-3">
              <div className="bg-green-900 border-l-4 border-green-500 p-3 rounded">
                <div className="text-green-300 font-medium">Consistent Performance</div>
                <div className="text-gray-300 text-sm">You've maintained above 85% completion rate for 3 consecutive weeks</div>
              </div>
              <div className="bg-blue-900 border-l-4 border-blue-500 p-3 rounded">
                <div className="text-blue-300 font-medium">Productivity Peak</div>
                <div className="text-gray-300 text-sm">Your most productive hours are between 9 AM - 11 AM</div>
              </div>
              <div className="bg-orange-900 border-l-4 border-orange-500 p-3 rounded">
                <div className="text-orange-300 font-medium">Focus Area</div>
                <div className="text-gray-300 text-sm">Consider breaking down larger tasks - completion rate drops for tasks over 2 hours</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductivityDashboard;