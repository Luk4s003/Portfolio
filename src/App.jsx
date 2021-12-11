import React, { useState } from "react";
import "./App.css";
import CorpoHome from "./components/CorpoHome";
import Header from "./components/Header";

export default (props) => (
    <div classname="App">
        <header>
            <Header />
        </header>
        <main>
            <CorpoHome />
        </main>
        <footer>

        </footer>
    </div>
);