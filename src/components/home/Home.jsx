import React from "react";
import "./Home.css"
import { Navbar } from "../navbar/Navbar"
import { Sidebar } from "../sidebar/Sidebar"

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