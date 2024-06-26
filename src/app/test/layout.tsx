//import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     
      <div className="flex h-screen overflow-hidden">
      <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}
