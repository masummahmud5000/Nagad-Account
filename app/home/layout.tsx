import Navber from "../_clientComponents/navber"

export default function NestedLayout({children}: any){
    return(
        <main>
            {children}
            <Navber/>
        </main>
    )
}