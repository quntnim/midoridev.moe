import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Subpage from "./pages/Subpage";
import Navbar from "./layouts/Navbar";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/subpage" element={<Subpage />} />
            </Routes>
        </div>
    );
};

export default App;