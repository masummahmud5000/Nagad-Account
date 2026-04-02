'use client'

import { useEffect } from "react";
import { usePage } from "./context/contextAPI"

export default function ProfileClient(){
    const {setPage} = usePage();
    useEffect(() => {
        setPage('profile')
    },[])

    return(
        <main>
            Profile Page, for Masum Mahmud
        </main>
    )
}