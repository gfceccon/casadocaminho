// @flow
import * as React from 'react';
import {NavLink} from "@/lib/nav/navLink";
import {Card} from "@/components/ui/card";
import Link from "next/link";

type Props = {
    navlink: NavLink;
};

export function HomeCard(props: Props) {
    return (
        <Link href={props.navlink.href}>
            <Card
                className="h-40 w-64 text-center align-middle
                flex flex-col justify-around
                p-4 text-2xl
                shadow-xl border-2
                bg-cbutton
                text-cbutton-foreground">
                {props.navlink.title}
            </Card>
        </Link>
    );
};