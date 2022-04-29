import React from "react";
import "./footer.css"

function Footer(){
    let year=new Date().getFullYear();
    return(
        <div className="footerContainer">
        <div className="footer">
        Copyright © {year}
        </div>
        </div>
    );
}

export default Footer;