import React from "react";
import CoinCard from "../card/card";
import { Routes, Route } from 'react-router-dom'
import IndexPage from "../Index Page/indexpage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route
                path="coin/:id"
                element={<CoinCard />}
            />
        </Routes>
    )
}

export default AppRoutes;