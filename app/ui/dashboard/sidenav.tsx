import NavLinks from "@/app/ui/dashboard/navLinks";
import React from "react";

export default function Sidenav() {
  return (
    <aside className="w-64 h-screen bg-white flex flex-col justify-between p-4 gap-1">
      <div className="bg-blue-600 h-30 text-white p-6 rounded-md flex flex-col justify-end">
        <div className="flex">
          <span className="text-2xl">🌐</span>
          <h1 className="text-xl font-bold">Acme</h1>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        <NavLinks />
      </nav>
      <div className="flex-1 bg-gray-50 rounded-md" />

      <button className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-200 rounded transition bg-gray-50 rounded-md">
        <span>⏻</span> Sign Out
      </button>
    </aside>
  );
}
