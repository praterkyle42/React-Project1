import React from "react"
import backgroundImg from "../images/reactjs-icon-2.png"

export default function Main() {
    return(
        <main>
            <div id="main-content--container">
                <h1 className="main-content--title">Fun Facts About React</h1>
            
                <ul className="main-content--list">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>    
        </main>
    )
}