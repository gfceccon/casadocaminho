import {CalendarPlus, HomeIcon, LucideIcon, UserRoundPlus} from "lucide-react";

export type NavLink = {
    title: string,
    href: string,
    icon?: LucideIcon
}

export const navLinks: NavLink[] = [
    {
        // Página inicial
        href: "/",
        title: "Home",
        icon: HomeIcon
    },
    {
        // Todos os eventos (cadastro de novo evento)
        href: "/eventos",
        title: "Eventos",
        icon: CalendarPlus,
    },
    {
        // Todas as Famílias (cadastro de nova família e membros)
        href: "/familias",
        title: "Famílias",
        icon: UserRoundPlus,
    },
    
]