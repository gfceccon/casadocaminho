"use client"

import {ColumnDef} from "@tanstack/react-table"
import {TFamilyComplete, TFamilyMember} from "@/db/zod"
import FamilyModal from "@/components/family/FamilyModal";
import * as React from "react";

export const FamilyColumns: ColumnDef<TFamilyComplete>[] = [
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "code",
        header: "Código",
    },
    {
        accessorKey: "members",
        header: "Membros",
        cell: ({row}) => {
            const members = row.getValue("members") as TFamilyMember[];
            const head = members.find((mem) => mem.head);
            const otherMembers = members.filter((mem) => !mem.head);
            const family = {
                id: row.getValue("id") as number,
                code: row.getValue("code") as string
            };
            console.log(family);
            
            
            return (
                <div className="flex flex-row gap-2">
                    {
                        head &&
                        <div className={"border-2 rounded-md p-2"}>{head.name}</div>
                    }
                    {
                        otherMembers.map((member: TFamilyMember) =>
                            (
                                <div className={"border-2 rounded-md p-2"}
                                     key={member.code}>{member.name} - {member.code}</div>
                            ))
                    }
                    {
                        <FamilyModal family={family}></FamilyModal>
                    }
                </div>)
        }
    }
]