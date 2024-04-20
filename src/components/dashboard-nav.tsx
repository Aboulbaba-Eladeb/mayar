"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
//import { NavItem } from "@/types"; 
import { Dispatch, SetStateAction } from "react";

interface DashboardNavProps {
  //items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({  setOpen }: DashboardNavProps) {
  const path = usePathname();

  

  return (
    <nav className="grid items-start gap-2">
      
    </nav>
  );
}
