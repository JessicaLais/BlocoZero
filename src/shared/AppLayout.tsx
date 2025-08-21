import { Outlet } from "react-router"
import { Header } from "./Header"

export function AppLayout(){
    return(
        <div className="w-screen h-screen bg-white-100 flex flex-col items-center text-gray-100 overflow-hidden">
            <main className="p-3 w-full h-[100px] bg-blue-400 m">
                <Header />
                <Outlet />
            </main>
        </div>
    )
}