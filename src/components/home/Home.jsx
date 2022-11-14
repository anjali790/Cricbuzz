import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Sidebar } from "../sidebar/Sidebar";
import  "./home.css";

export const Home = () => {
    return (
        <>
        <div className="Home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                home container
            </div>
        </div>
        </>
    )
}