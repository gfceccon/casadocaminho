import * as React from 'react';
import Link from "next/link";
import {HomeCard} from "@/components/home/HomeCard";

export default function Home() {
    return (
        <main>
            <div className="flex flex-row flex-wrap gap-4">
                <HomeCard navlink={{href: "/eventos/?tipo=sopa", title: "Nova Sopa"}}>
                </HomeCard>
                <HomeCard navlink={{href: "/familias", title: "Nova Família"}}>
                </HomeCard>
                <HomeCard navlink={{href: "/frequencias/?tipo=sopa", title: "Ver Frequência"}}>
                </HomeCard>
                <HomeCard navlink={{href: "/relatorios/participacao", title: "Gerar Relatório Participação"}}>
                </HomeCard>
                <HomeCard navlink={{href: "/relatorios/assinatura", title: "Gerar Relatório Assinaturas"}}>
                </HomeCard>
            </div>
        </main>
    );
}
