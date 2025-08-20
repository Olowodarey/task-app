import React from 'react';
import { CheckCircle, Clock, AlertTriangle, Calendar, Mic, Plus, MoreVertical, ChevronRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm md:text-base mt-1">Manage your tasks with AI-powered assistance</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors">
            <Mic className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors font-medium">
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border rounded-xl p-4 md:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs md:text-sm">Completed</p>
              <p className="text-2xl md:text-3xl font-bold">0</p>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-4 md:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs md:text-sm">Total Tasks</p>
              <p className="text-2xl md:text-3xl font-bold">3</p>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-4 md:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs md:text-sm">Urgent</p>
              <p className="text-2xl md:text-3xl font-bold">1</p>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-4 md:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs md:text-sm">Overdue</p>
              <p className="text-2xl md:text-3xl font-bold">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold">Your Tasks</h2>
        <span className="text-sm text-muted-foreground bg-accent px-3 py-1 rounded-full">3 active</span>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {/* Task 1 */}
        <div className="bg-card border-2 border-amber-500/20 rounded-xl p-4 md:p-6 hover:border-amber-500/30 transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex items-center gap-3 mt-1">
                <div className="w-2 h-6 bg-amber-500 rounded-full"></div>
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-2 border-muted-foreground/30 bg-background transition-colors hover:border-primary/50"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Complete project proposal</h3>
                  <span className="bg-blue-500/10 text-blue-500 text-xs px-3 py-1 rounded-full w-fit">Work</span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base mb-4">
                  Finish the Q4 project proposal for the marketing campaign
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 text-amber-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 15, 2024</span>
                  </div>
                  <span className="text-muted-foreground/70 text-sm">3 subtasks</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4 text-muted-foreground" />
              </button>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div className="bg-card border-2 border-blue-500/20 rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex items-center gap-3 mt-1">
                <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-2 border-muted-foreground/30 bg-background transition-colors hover:border-primary/50"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Buy groceries</h3>
                  <span className="bg-green-500/10 text-green-500 text-xs px-3 py-1 rounded-full w-fit">Personal</span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base mb-4">
                  Weekly grocery shopping for the family
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 text-amber-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 12, 2024</span>
                  </div>
                  <span className="text-muted-foreground/70 text-sm">3 subtasks</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4 text-muted-foreground" />
              </button>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}