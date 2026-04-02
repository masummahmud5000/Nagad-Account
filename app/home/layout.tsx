import { PageProvider } from "../_clientComponents/context/contextAPI"
import Navber from "../_clientComponents/navber"

export default function NestedLayout({children}: any){
    return(
        <main>
            <PageProvider>
                {children}
                <Navber/>
            </PageProvider>
        </main>
    )
}