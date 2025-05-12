"use client";

import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Sidebar from "../components/Sidebar";

function DashboardLayoutContent({ children }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!session) {
    redirect("/auth/login");
    return null;
  }

  return (
    <div className="flex">
      <Sidebar user={session.user} />
      <div className="flex-1 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }) {
  return (
    <SessionProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SessionProvider>
  );
}