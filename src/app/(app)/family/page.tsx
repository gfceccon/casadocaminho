import * as React from 'react';
import { getFamilies } from "@/app/(app)/family/actions";
import FamilyModal from "@/components/family/FamilyModal";
import FamilyTable from "@/components/family/table/FamilyTable";
import { FamilyColumns } from "@/components/family/table/FamilyColumns";
import { TFamilyComplete } from "@/db/zod";

type Props = {
  children?: React.ReactNode

};

export default async function Family(props: Props) {
  const families = (await getFamilies()) as TFamilyComplete[];
  return (
    <main>
      <FamilyModal></FamilyModal>
      <div className="container mx-auto py-10">
        <FamilyTable columns={FamilyColumns} data={families} />
      </div>
    </main>
  );
};