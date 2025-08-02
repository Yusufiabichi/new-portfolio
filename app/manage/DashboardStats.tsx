
'use client';

import { useState, useEffect } from 'react';

export default function DashboardStats() {
  const [stats, setStats] = useState({
    totalVisits: 1250,
    weeklyVisits: [
      { week: 'Week 1', visits: 180 },
      { week: 'Week 2', visits: 220 },
      { week: 'Week 3', visits: 195 },
      { week: 'Week 4', visits: 240 },
    ],
    totalMessages: 24,
    totalProjects: 4
  });

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-eye-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Visits</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalVisits}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
              <i className="ri-mail-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Messages</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalMessages}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
              <i className="ri-folder-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Projects</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalProjects}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
              <i className="ri-calendar-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-gray-900">240</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Visits Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Page Visits</h3>
        
        <div className="space-y-4">
          {stats.weeklyVisits.map((week, index) => (
            <div key={index} className="flex items-center">
              <div className="w-20 text-sm text-gray-600">{week.week}</div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(week.visits / 250) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-16 text-right text-sm font-medium text-gray-900">
                {week.visits}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <i className="ri-mail-line text-sm w-4 h-4 flex items-center justify-center"></i>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm text-gray-900">New message received from Sarah Johnson</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <i className="ri-eye-line text-sm w-4 h-4 flex items-center justify-center"></i>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm text-gray-900">Portfolio viewed 15 times today</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
              <i className="ri-external-link-line text-sm w-4 h-4 flex items-center justify-center"></i>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm text-gray-900">Project demo clicked 8 times</p>
              <p className="text-xs text-gray-500">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
