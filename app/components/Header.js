"use client";

import { useSession } from "next-auth/react";
import { BellIcon } from "@heroicons/react/24/outline";

export default function Header({ pageTitle }) {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">{pageTitle}</h1>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <BellIcon className="h-6 w-6 text-gray-600" />
        </button>
        
        <div className="flex items-center">
          <div className="flex flex-col ml-3">
            <span className="text-sm font-medium text-gray-700">
              {session?.user?.name || "Usuario"}
            </span>
            <span className="text-xs text-gray-500">
              {session?.user?.role || "Rol no definido"}
            </span>
          </div>
          <div className="ml-3 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
            {session?.user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
        </div>
      </div>
    </header>
  );
}