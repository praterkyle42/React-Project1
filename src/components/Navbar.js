import React from "react"
import reactLogo from "../images/reactjs-icon@2x.png"

export default function Navbar() {
    return(
        <nav className="nav-bar">
            <div className="logo-div">
                <img src={reactLogo} alt="React Logo" className="nav-img"></img>
                <h1 className="logo-title">ReactFacts</h1>
            </div>
            <div className="project-title-container">
                 <h2 className="project-title-text">React Course - Project 1</h2>
            </div>
        </nav>
    )
}