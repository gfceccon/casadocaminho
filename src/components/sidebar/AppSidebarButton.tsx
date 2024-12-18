// @flow
import * as React from 'react';
import {NavLink} from "@/lib/nav/navLink";
import Link from "next/link";
import {SidebarMenuButton} from "@/components/ui/sidebar";

type Props = {
    link: NavLink
};

export function AppSidebarButton(props: Props) {
    return (
        <Link key={props.link.title} href={props.link.href}>
            <SidebarMenuButton
                className={"h-10 hover:bg-palette-light-blue hover:text-white transition-colors duration-100"}>
                <div className={"flex flex-row items-center gap-2"}>
                    <props.link.icon/>
                    <span className={"text-2xl"}>{props.link.title}</span>
                </div>
            </SidebarMenuButton>
        </Link>
    );
}