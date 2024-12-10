import * as React from 'react';
import {getFamilies} from "@/app/(app)/family/actions";

type Props = {
    children: React.ReactNode
    
};

export default function Family(props: Props) {
    const families = getFamilies();
    return (
        <div>
        
        </div>
    );
};