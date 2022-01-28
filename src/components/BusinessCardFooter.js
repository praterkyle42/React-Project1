import React from "react"
import twitterLogo from "../images/Twitter_Icon.png"
import facebookLogo from "../images/Facebook_Icon.png"
import instagramLogo from "../images/Instagram_Icon.png"
import gitHubLogo from "../images/GitHub_Icon.png"

export default function BusinessCardFooter() {
    return(
        <div className="business-card-footer">
 
                <a href="https://twitter.com/praterkyle42" target="_blank">
                    <img src={twitterLogo}></img>
                </a>
                <a href="https://www.facebook.com/kyle.prater.16/" target="_blank">
                    <img src={facebookLogo}></img>
                </a>
                <a href="https://www.instagram.com/praterkyle42/?hl=en" target="_blank">
                    <img src={instagramLogo}></img>
                </a>
                <a href="https://github.com/praterkyle42" target="_blank">
                    <img src={gitHubLogo}></img>
                </a>  

        </div>
    )
}