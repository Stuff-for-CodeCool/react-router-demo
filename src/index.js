import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Ceva from "./pages/Ceva";
import Altceva from "./pages/Altceva";
import Una from "./pages/Una";

import Error from "./components/Error";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ceva" element={<Ceva />} />
                <Route path="/altceva" element={<Altceva />} />
                <Route path="/altceva/:id" element={<Una />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
