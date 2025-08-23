import { Routes, Route } from "react-router";
import { SignIn } from "../pages/SignIn";
//import { SignUp } from "../pages/SignUp";


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/login" element={<SignIn />} />
           {/* <Route path="/signup" element={<SignUp />} />*/}
        </Routes>
    )
}