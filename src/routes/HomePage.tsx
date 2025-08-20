import { Routes, Route } from "react-router";
import { AppLayout } from "../shared/AppLayout";
import { Home } from "../features/auth/pages/Home";
export function HomePage() {
    return(
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}