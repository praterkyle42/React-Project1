import React from "react"
import twitterLogo from "../images/Twitter_Icon.png"

export default function BusinessCardFooter() {
    return(
        <div className="business-card-footer">
            <div className="business-card-footer--logos">
                <a href="https://twitter.com/praterkyle42" target="_blank">
                    <img src={twitterLogo}></img>
                </a>
            </div>
        </div>
    )
}