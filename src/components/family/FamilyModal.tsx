"use client";

import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {LucidePlus} from "lucide-react";
import {TFamily, TFamilyMemberComplete} from "@/db/zod";
import FamilyForm from "@/components/family/FamilyForm";
import * as zod from "zod";

interface IFamilyModal {
    member?: TFamilyMemberComplete;
    family?: TFamily;
}

export default function FamilyModal({
    member,
    family,
}: IFamilyModal) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    
    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger asChild>
                {family ? (
                    <Button>
                        <LucidePlus/>
                        {"Membro"}
                    </Button>
                ) : (
                    <Button variant={"outline"} className="font-semibold">
                        <LucidePlus/>
                        {"Família"}
                    </Button>)}
            </DialogTrigger>
            
            <DialogContent>
                <DialogHeader className="px-5 pt-5">
                    <DialogTitle>{
                        member?.name || (family ? `Novo Membro (Família ${family.code})` : "Nova Família")
                    }</DialogTitle>
                </DialogHeader>
                
                <div className="px-5 pb-5">
                    <FamilyForm closeModal={closeModal} family={family} member={member}/>
                </div>
            </DialogContent>
        </Dialog>
    );
}
