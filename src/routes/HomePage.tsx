import { Routes, Route } from "react-router";
import { AppLayout } from "../shared/AppLayout";
import { CardObra } from "../pages/CardObra";
import { Home } from "../pages/HomePage";
import { NotFound } from "../pages/NotFound";
export function HomePage() {
    return(
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/work/:id" element={<CardObra />} />
            </Route>
                <Route path="*" element={<NotFound />} />
        </Routes>
    )
}