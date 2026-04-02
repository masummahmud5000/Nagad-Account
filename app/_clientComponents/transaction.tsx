'use client'

import { useEffect } from "react";
import { usePage } from "./context/contextAPI"

export default function TransactionClient(){
    const {setPage} = usePage();
    useEffect(() => {
        setPage('tran')
    },[])

    return(
        <main>
            Transactions Page, for Masum Mahmud
        </main>
    )
}