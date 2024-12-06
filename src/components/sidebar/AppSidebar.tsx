// @flow
import * as React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroupContent, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarSeparator
} from '@/components/ui/sidebar'
import {navLinks} from "@/lib/nav/navLink";
import {AppSidebarButton} from "@/components/sidebar/AppSidebarButton";
import {HomeIcon} from "lucide-react";
import tailwindConfig from "../../../tailwind.config";

export function AppSidebar() {
    const headerIconColor = tailwindConfig.theme.extend.colors.sidebar["header-icon"];
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenuButton>
                    <div className={"flex flex-row gap-2 items-center"}>
                        <HomeIcon size={32} color={headerIconColor} />
                        <span className={"font-bold text-xl"}>Casa do Caminho</span>
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroupContent>
                    <SidebarMenu key={"nav-links"} className={"px-2"}>
                        <SidebarSeparator></SidebarSeparator>
                        {navLinks.map(link =>
                            <>
                                <SidebarMenuItem key={link.title}>
                                    <SidebarMenuButton>
                                        <AppSidebarButton key={link.title} link={link}></AppSidebarButton>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </>
                        )}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarContent>
        </Sidebar>
    );
};