import Component from "@/app/(app)/seed/component";
import {getFamilyMembers} from "@/app/(app)/seed/actions";

export default async function Seed() {
    const members = await getFamilyMembers();
    return (
        <div>
            <Component families={members}></Component>
        </div>
    )
}