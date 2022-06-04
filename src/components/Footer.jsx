import React from "react";

function Footer(){
    const currentTime = new Date();
    let year = currentTime.getFullYear();
    return (
        <div className="footer">
            <p className="footer-copy">Copyright ⓒ {year}</p>
        </div>
    );
}



export default Footer;