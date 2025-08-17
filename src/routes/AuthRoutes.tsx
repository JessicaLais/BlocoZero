import { Routes, Route } from "react-router";
import { SignIn } from "../features/auth/pages/SignIn";


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn />}/>
        </Routes>
    )
}