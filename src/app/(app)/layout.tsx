import * as React from 'react';
import {AppSidebar} from "@/components/sidebar/AppSidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";

type Props = {
    children: React.ReactNode;
};

export default function AppLayout(props: Props) {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar></AppSidebar>
            <SidebarInset className={"p-4"}>
                {props.children}
            </SidebarInset>
        </SidebarProvider>
    );
};