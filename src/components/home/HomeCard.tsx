// @flow
import * as React from 'react';
import {NavLink} from "@/lib/nav/navLink";
import {Card} from "@/components/ui/card";
import Link from "next/link";
import {cn} from "@/lib/utils";

type Props = {
    href: string;
    className?: string;
    children?: React.ReactNode;
};

export function HomeCard(props: Props) {
    return (
        <Link href={props.href}>
            <Card
                className={cn("h-40 w-64 text-center align-middle flex flex-col justify-around p-4 text-2xl shadow-xl border-2 hover:bg-card-hover hover:transition-colors duration-300", props.className)}>
                {props.children}
            </Card>
        </Link>
    );
};