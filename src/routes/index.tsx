import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes.tsx";
import { HomePage } from "./HomePage.tsx";
import { NotFound } from "../pages/NotFound.tsx";
export function Routes(){
    
    return(
        <BrowserRouter>
            <AuthRoutes />
            <HomePage />
            <NotFound />
        </BrowserRouter>
    )
}