import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Portifolio from "./pages/Portifolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" exact />
                <Route element={<Portifolio/>} path="/portifolio" />
                <Route element={<About/>} path="/about" />
                <Route element={<Contact/>} path="/contact" />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;