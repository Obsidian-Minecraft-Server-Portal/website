import React from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./assets/css/index.css";
import Home from "./assets/pages/Home.tsx";
import Navigation from "./assets/components/Navigation.tsx";
import {HeroUIProvider} from "@heroui/react";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <MainContentRenderer/>
        </BrowserRouter>
    </React.StrictMode>
);

export function MainContentRenderer()
{
    const navigate = useNavigate();
    return (
        <HeroUIProvider navigate={navigate}>
            <Navigation/>
            <Routes>
                <Route>
                    <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </HeroUIProvider>
    );
}
