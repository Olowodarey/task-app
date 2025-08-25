"use client";

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { DateSelectArg, EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FiPlus, FiFilter, FiSearch, FiMenu, FiX } from "react-icons/fi";

type TaskCategory = "Work" | "Personal" | "Urgent";

interface TaskEvent {
  id: string;
  title: string;
  start: string;
  category: TaskCategory;
  completed?: boolean;
}

export default function CalendarPage() {
  const [events, setEvents] = useState<TaskEvent[]>([
    {
      id: "1",
      title: "Work Meeting",
      start: "2025-08-05T10:00:00",
      category: "Work",
    },
    {
      id: "2",
      title: "Doctor Appointment",
      start: "2025-08-10T14:30:00",
      category: "Personal",
    },
    {
      id: "3",
      title: "Project Deadline",
      start: "2025-08-15T23:59:00",
      category: "Urgent",
    },
  ]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle window resize
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);



  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt("Enter task title:");
    if (title) {
      setEvents([
        ...events,
        {
          id: String(events.length + 1),
          title,
          start: selectInfo.startStr,
          category: "Work",
        },
      ]);
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Mark "${clickInfo.event.title}" as completed?`)) {
      setEvents(
        events.map((ev) =>
          ev.id === clickInfo.event.id ? { ...ev, completed: true } : ev
        )
      );
    }
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    // Auto-open right sidebar on mobile when date is selected
    if (isClient && window.innerWidth < 1024) {
      setIsRightSidebarOpen(true);
    }
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const todayEvents = events.filter((event) => {
    const eventDate = new Date(event.start);
    return eventDate.toDateString() === (selectedDate || today).toDateString();
  });

  return (
    <div className="flex h-screen bg-background transition-colors duration-200 relative">
      {/* Mobile Overlay */}
      {(isMobileSidebarOpen || isRightSidebarOpen) && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => {
            setIsMobileSidebarOpen(false);
            setIsRightSidebarOpen(false);
          }}
        />
      )}

      {/* Left Sidebar */}
      <div
        className={`
        fixed lg:relative inset-y-0 left-0 z-50 lg:z-0
        w-64 sm:w-72 lg:w-64 xl:w-72
        bg-background shadow-lg border-r border-border
        transform transition-transform duration-300 ease-in-out
        ${
          isMobileSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        <div className="p-4 lg:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <h1 className="text-xl lg:text-2xl font-bold text-foreground">
              Calendar
            </h1>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-accent transition-colors duration-200">
                <FiPlus className="text-foreground/80 w-5 h-5" />
              </button>
              <button
                onClick={toggleMobileSidebar}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FiX className="text-foreground/80 w-5 h-5" />
              </button>
            </div>
          </div>

          {/* My Calendars */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base lg:text-lg font-semibold text-foreground/90">
                My Calendars
              </h2>
              <FiPlus className="text-foreground/50 w-4 h-4" />
            </div>
            <div className="space-y-2">
              {["Work", "Personal", "Urgent"].map((category) => (
                <div key={category} className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-2 ${
                      category === "Work"
                        ? "bg-blue-500"
                        : category === "Personal"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  />
                  <span className="text-sm text-foreground/80">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mt-6 lg:mt-8">
            <h2 className="text-base lg:text-lg font-semibold text-foreground/90 mb-4">
              Upcoming Events
            </h2>
            <div className="space-y-3 lg:space-y-4">
              {events.slice(0, 3).map((event) => (
                <div
                  key={event.id}
                  className="p-3 rounded-lg border border-border shadow-sm transition-colors duration-200 bg-card"
                >
                  <div className="flex items-start">
                    <div
                      className={`w-1 h-full rounded-full ${
                        event.category === "Work"
                          ? "bg-blue-500"
                          : event.category === "Personal"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {new Date(event.start).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden bg-background p-4 border-b border-border flex items-center justify-between">
          <button
            onClick={toggleMobileSidebar}
            className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
          >
            <FiMenu className="text-foreground/80 w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h1>
          <button
            onClick={toggleRightSidebar}
            className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
          >
            <FiPlus className="text-foreground/80 w-5 h-5" />
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block bg-background p-6 border-b border-border transition-colors duration-200">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mb-6 space-y-4 xl:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {selectedDate
                  ? selectedDate.toDateString()
                  : "No date selected"}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-auto">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200"
                />
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-200 text-sm">
                  <FiPlus className="mr-2 w-4 h-4" />
                  <span className="hidden sm:inline">Add Event</span>
                </button>
                <button className="p-2 rounded-lg border border-input hover:bg-accent transition-colors duration-200">
                  <FiFilter className="text-foreground/70 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-auto p-3 lg:p-6">
          <div className="bg-background rounded-xl border border-border p-2 sm:p-4 lg:p-6 h-full transition-colors duration-200">
            {isClient && (
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right:
                    windowWidth && windowWidth < 768
                      ? "dayGridMonth"
                      : "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                selectable={true}
                select={handleDateSelect}
                events={events}
                eventClick={handleEventClick}
                height="100%"
                nowIndicator={true}
                dayMaxEvents={windowWidth && windowWidth < 768 ? 2 : 3}
                dayMaxEventRows={windowWidth && windowWidth < 768 ? 2 : 3}
              />
            )}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Today's Events */}
      <div
        className={`
        fixed lg:relative inset-y-0 right-0 z-50 lg:z-0
        w-72 sm:w-80 lg:w-80 xl:w-96
        bg-background shadow-lg border-l border-border overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${
          isRightSidebarOpen
            ? "translate-x-0"
            : "translate-x-full lg:translate-x-0"
        }
        ${isClient && window.innerWidth < 1024 ? "block" : "hidden xl:block"}
      `}
      >
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base lg:text-lg font-semibold text-foreground/90">
              {selectedDate ? selectedDate.toDateString() : "Today"}'s Events
            </h2>
            <button
              onClick={toggleRightSidebar}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <FiX className="text-foreground/80 w-5 h-5" />
            </button>
          </div>

          {todayEvents.length > 0 ? (
            <div className="space-y-3">
              {todayEvents.map((event) => (
                <div
                  key={event.id}
                  className={`p-3 sm:p-4 rounded-lg transition-colors duration-200 bg-card ${
                    event.category === "Work"
                      ? "border-l-4 border-blue-500"
                      : event.category === "Personal"
                      ? "border-l-4 border-green-500"
                      : "border-l-4 border-red-500"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-foreground text-sm lg:text-base">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.start).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <button className="text-foreground/50 hover:text-foreground transition-colors duration-200 p-1">
                      <FiPlus className="transform rotate-45 w-4 h-4" />
                    </button>
                  </div>
                  {event.completed && (
                    <div className="mt-2 text-xs text-green-500 font-medium">
                      ✓ Completed
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-sm">
                No events scheduled for {selectedDate ? "this day" : "today"}
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        /* FullCalendar Responsive & Dark Mode Styles */
        .dark .fc {
          color: #e5e7eb;
        }
        .dark .fc-theme-standard .fc-scrollgrid {
          border-color: #374151;
        }
        .dark .fc-theme-standard th,
        .dark .fc-theme-standard td {
          border-color: #374151;
        }
        .dark .fc-col-header-cell {
          background-color: #1f2937;
        }
        .dark .fc-daygrid-day {
          background-color: #111827;
        }
        .dark .fc-daygrid-day:hover {
          background-color: #1f2937;
        }
        .dark .fc-day-today {
          background-color: #1e3a8a !important;
        }
        .dark .fc-button {
          background-color: #374151;
          border-color: #4b5563;
          color: #e5e7eb;
        }
        .dark .fc-button:hover {
          background-color: #4b5563;
        }
        .dark .fc-button-primary:not(:disabled).fc-button-active {
          background-color: #3b82f6;
          border-color: #3b82f6;
        }
        .dark .fc-toolbar-title {
          color: #e5e7eb;
        }
        .dark .fc-daygrid-day-number {
          color: #e5e7eb;
        }
        .dark .fc-daygrid-more-link {
          color: #3b82f6;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .fc-toolbar {
            flex-direction: column;
            gap: 0.5rem;
          }
          .fc-toolbar-chunk {
            display: flex;
            justify-content: center;
          }
          .fc-button {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
          }
          .fc-daygrid-day-number {
            font-size: 0.875rem;
          }
          .fc-event-title {
            font-size: 0.75rem;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 769px) and (max-width: 1023px) {
          .fc-button {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
}
