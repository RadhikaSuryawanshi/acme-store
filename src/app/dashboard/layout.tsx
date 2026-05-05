"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";


import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="w-full min-h-screen bg-gray-50 ">
      <Navbar />
      <div className="flex-1 bg-gray-50 ">{children}</div>
      <Footer />
    </div>
  );
}
