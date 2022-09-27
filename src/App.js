import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import Header from "./Component/Header";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Recipe />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
