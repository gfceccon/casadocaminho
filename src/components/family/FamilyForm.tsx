"use client";

import {useForm} from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CalendarIcon} from "lucide-react";
import {Calendar} from "@/components/ui/calendar";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {useRouter} from "next/navigation";
import {
    TFamilyMemberRelationships,
    TFamilyMemberGenders,
    TFamilyMemberComplete,
    ZFamilyMemberComplete,
    ZFamilyMemberInsert,
    TFamilyMemberInsert, TFamily
} from "@/db/zod";
import {addMember} from "@/app/(app)/family/[id]/actions";
import {zodResolver} from "@hookform/resolvers/zod";
import * as zod from "zod";
import {useState} from "react";

interface IFamilyForm {
    member?: TFamilyMemberInsert;
    family?: TFamily;
    closeModal?: () => void;
}

const FamilyForm = ({
    member,
    family,
    closeModal,
}: IFamilyForm) => {
    const router = useRouter();
    
    const editing = !!family;
    const form = useForm<TFamilyMemberInsert>({
        resolver: zodResolver(ZFamilyMemberInsert),
        defaultValues: member || {
            name: "",
            code: "",
            birthday: new Date(),
            relationship: "Pai",
            gender: "Masculino",
            head: false,
        },
    });
    
    
    const handleSubmit = async (values: TFamilyMemberInsert) => {
        console.log(values);
        const data = ZFamilyMemberInsert.parse(values);
        if (editing)
            await addMember(data, family?.code);
        else
            await addMember(data);
        if (closeModal) {
            closeModal()
        }
        router.refresh();
    };
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit, errors => {
                console.log(errors)
            })} className={"space-y-8"}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (<FormItem>
                            <FormLabel>Nome {member?.head && "do Principal"}</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="code"
                    render={({field}) => (<FormItem>
                            <FormLabel>Código</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="birthday"
                    render={({field}) => (<FormItem>
                            <FormLabel>Data de Nascimento</FormLabel>
                            <br/>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(new Date(field.value), "PPP")
                                            ) : (
                                                <span>Selecione uma data</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={new Date(field.value)}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="relationship"
                    render={({field}) => (<FormItem>
                            <FormLabel>Parentesco</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={String(field.value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Parentesco"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            TFamilyMemberRelationships.options.map((p) => (
                                                <SelectItem key={p} value={p}>
                                                    {p}
                                                </SelectItem>
                                            ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="gender"
                    render={({field}) => (<FormItem>
                            <FormLabel>Gênero</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={String(field.value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Gênero"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            TFamilyMemberGenders.options.map((g) => (
                                                <SelectItem key={g} value={g}>
                                                    {g}
                                                </SelectItem>
                                            ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {/*<FormField control={form.control}
                           name={"head"}
                           render={({field}) =>
                               <FormItem>
                                   <Input className={"hidden"} hidden={true}
                                          defaultValue={String(field.value)}>
                                   </Input>
                               </FormItem>}
                ></FormField>
                <FormField control={form.control}
                           name={"familyId"}
                           render={({field}) =>
                               <FormItem>
                                   <Input className={"hidden"} hidden={true}
                                          defaultValue={String(field.value)}>
                                   </Input>
                               </FormItem>
                           }
                ></FormField>*/}
                {
                    !member &&
                    <Button type="submit" className="mr-1" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting && `Criando` || `Criar`}
                    </Button>
                }
                {
                    member &&
                    <Button type="submit" className="mr-1" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting && `Criando` || `Criar`}
                    </Button>
                }
            </form>
        </Form>
    );
};

export default FamilyForm;
