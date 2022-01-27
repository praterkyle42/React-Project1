import React from "react"
import myPhoto from "../images/test2.jpg"
import mailLogo from "../images/Mail.png"
import linkedInLogo from "../images/linkedin.png"
export default function BusinessCardInfo() {
    function copyAddress() {
        const email = "kyle@morphdev.co"
        navigator.clipboard.writeText(email)
        alert("Email copied to clipboard")
    }
    return(
        <div className="business-card-info--container">
           <img src={myPhoto} alt="profile" className="business-card--img" />
            <div className="business-card-info--main">
                <div className="main-info--text-container">
                <h1>Kyle Prater</h1>
                <p>Junior Frontend Developer</p>
                <small>kyle@morphdev.co</small>
                </div>
                <div className="business-card-info--buttons">
                    <button className="mail-btn" onClick={copyAddress}>
                        <div className="btn">
                        <img src={mailLogo} className="btn-img"></img>
                        Email
                        </div>
                    </button>
                    <a href='https://www.linkedin.com/in/kyle-prater-32104420a/' target="_blank"><button className="linkedIn-btn">
                        <div className="btn">
                            <img src={linkedInLogo} className="btn-img"></img>
                            LinkedIn
                        </div>
                    </button></a>
                </div>    
            </div>
        </div>
    )
}

