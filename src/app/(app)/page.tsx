import * as React from 'react';
import {HomeCard} from "@/components/home/HomeCard";
import {getEventsFromDate} from "@/app/(app)/actions";
import dayjs from "dayjs";


export default async function Home() {
    const eventsToday = await getEventsFromDate(new Date());
    return (
        <main>
            <div className="container flex flex-col gap-4">
                <h1 className={"font-bold text-4xl"}>Atalhos</h1>
                <div className="flex flex-row flex-wrap gap-4">
                    <HomeCard href={"/event/?tipo=sopa"}>
                        <p>Nova Sopa</p>
                    </HomeCard>
                    <HomeCard href={"/family"}>
                        <p>Nova Família</p>
                    </HomeCard>
                    <HomeCard href={"/attendance/?tipo=sopa"}>
                        <p>Ver Frequência</p>
                    </HomeCard>
                    <HomeCard href={"/report/attendance"}>
                        <p>Gerar Relatório Participação</p>
                    </HomeCard>
                    <HomeCard href={"/report/signatures"}>
                        <p>Gerar Relatório Assinaturas</p>
                    </HomeCard>
                </div>
                {
                    eventsToday.length > 0 &&
                    (
                        <>
                            <h1 className={"font-bold text-4xl"}>Evento em Andamento</h1>
                            {
                                // eventsToday.map((event) => {
                                //     const date = dayjs(event.startDate);
                                //     return (<div key={`${event.name}_${event.startDate}_${event.endDate}`}>
                                //         <HomeCard href={`/event/${event.id}`}
                                //                   className={"bg-palette-cerulean hover:bg-palette-violet"}>
                                //             <p>{`${event.name} (${date.format("DD/MM/YYYY")})`}</p>
                                //         </HomeCard>
                                //     </div>)
                                // })
                            }
                        </>
                    )
                }
            </div>
        </main>
    );
}
