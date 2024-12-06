// @flow
import * as React from 'react';
import Link from "next/link";
import {NavLink} from "@/lib/nav/navLink";
import {Separator} from "@/components/ui/separator";

type Props = {
    link: NavLink
};

export function AppSidebarButton(props: Props) {
    return (
    <Link key={props.link.title} href={props.link.href}>
        <div className={"flex flex-row items-center"}>
            <props.link.icon className={"mr-2"} />
            <span className={"font-semibold"}>{props.link.title}</span>
        </div>
    </Link>
    )
        ;
}