import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes.tsx";
import { HomePage } from "./HomePage.tsx";
export function Routes(){
    return(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    )
}