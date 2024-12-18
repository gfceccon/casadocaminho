import * as React from 'react';
import {getFamily} from "@/app/(app)/family/[id]/actions";
import {useRouter} from "next/navigation";

type Props = {
    children?: React.ReactNode
    params: Promise<{ id: string }>
};

export default async function FamilyId(props: Props) {
    const id = (await props.params).id;
    const family = (await getFamily(id))?.[0] || null;
    const head = family.members.find((mem) => mem.head === true);
    const otherMembers = family.members.filter((mem) => mem.head !== true);
    
    
    return (
        <main>
            <div className={"flex flex-col gap-2"}>
                <h1 className={"text-2xl"}>{`Família #${family.code}`}</h1>
                <div>{
                    head &&
                    <div>
                        <h2 className={"text-xl"}>Contato Principal</h2>
                        <div className={"grid grid-flow-col gap-1"}>{
                            <span>{head.name}</span>
                        }</div>
                    </div>
                    
                }</div>
                
                <div>{
                    otherMembers.length > 0 &&
                    otherMembers.map((member) => (
                        <div key={`member_${member.id}`}>
                            <h2 className={"text-xl"}>Contato Principal</h2>
                            <div className={"grid grid-flow-col gap-1"}>{
                                <span>{member.name}</span>
                            }</div>
                        </div>
                    ))
                }</div>
            </div>
            
        </main>
    );
};