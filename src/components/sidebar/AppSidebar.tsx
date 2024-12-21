// @flow
import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent, SidebarGroupLabel, SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, SidebarSeparator
} from '@/components/ui/sidebar'
import { navLinks } from "@/lib/nav/navLink";
import { AppSidebarButton } from "@/components/sidebar/AppSidebarButton";
import { HomeIcon } from "lucide-react";
import tailwindConfig from "../../../tailwind.config";
import Link from "next/link";

export function AppSidebar() {
  const headerIconColor = tailwindConfig.theme.extend.colors.sidebar.icon;
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenuButton>
          <div className={"flex flex-row gap-2 items-center justify-start"}>
            <HomeIcon size={32} color={headerIconColor} strokeWidth={"1.75"} />
            <p className={"font-semibold text-xl"}>Casa do Caminho</p>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSeparator></SidebarSeparator>
        <SidebarGroupContent>
          <SidebarMenu key={"nav-links"} className={"px-2"}>
            {navLinks.map(link =>
              <SidebarMenuItem key={link.title}>
                <AppSidebarButton key={link.title} link={link}></AppSidebarButton>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarSeparator></SidebarSeparator>
        <SidebarGroupContent>
          <SidebarGroupLabel>
            <div className={"flex flex-row gap-2 items-center px-2"}>
              <p className={"font-semibold text-xl"}>Relatórios</p>
            </div>
          </SidebarGroupLabel>
          <SidebarMenu key={"nav-links"} className={"px-2"}>
            {navLinks.map(link =>
              <SidebarMenuItem key={link.title}>
                <AppSidebarButton key={link.title} link={link}></AppSidebarButton>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
    </Sidebar>
  );
};