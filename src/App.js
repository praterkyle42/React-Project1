import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import BusinessCardInfo from "./components/BusinessCardInfo"
import BusinessCardAbout from "./components/BusinessCardAbout"
import BusinessCardInterests from "./components/BusinessCardInterests"
import BusinessCardFooter from "./components/BusinessCardFooter"

export default function App() {
    return(
        <div className="container">
            <Navbar />
            <Main />
            <div className="business-card">
                <h1>Made By:</h1>
                <BusinessCardInfo />
                <BusinessCardAbout /> 
                <BusinessCardInterests /> 
                <BusinessCardFooter />  
            </div>    
        </div>
        
    )
}