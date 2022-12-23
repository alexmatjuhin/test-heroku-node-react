import * as React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import styles from "./App.scss";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";

const App = () => {
    const { pathname } = useLocation();

    return (
        <div className={styles.app}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;