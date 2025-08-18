import { Routes, Route } from "react-router";
import { SignIn } from "../features/auth/pages/SignIn";
import { SignUp } from "../features/auth/pages/SignUp";


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}