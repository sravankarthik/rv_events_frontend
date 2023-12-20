import React from "react";
import {
    Route, BrowserRouter, Routes
} from "react-router-dom";
import Forms from "./Forms";
import Event from "./Events";
import AboutUs from "./AboutUs";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Event />} />
                <Route path="/form" exact element={<Forms />} />
                <Route path="/aboutus" exact element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;