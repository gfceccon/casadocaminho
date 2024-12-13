"use client"
import * as React from 'react';
import {Button} from "@/components/ui/button";
import {insertFamilyMember} from "@/app/(app)/seed/actions";
import {FamilyMemberSelect} from "@/db/"
import {useRouter} from "next/navigation";

type Props = {
    children?: React.ReactNode,
    families?: FamilyMemberSelect[]
}
export default function Component(props: Props) {
    const router = useRouter();
    const submitButton = async () => {
        await insertFamilyMember()
        router.refresh();
    }
    
    return (
        <div>
            {
                props.families && props.families.map((family: FamilyMemberSelect, index: number) =>
                    <div key={index}>{family.name}</div>
                )
            }
            <Button onClick={submitButton}>Click me</Button>
        </div>
    )
}