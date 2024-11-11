import React from "react";

export const Footer = () => {
    const getCurrentYear = () => new Date().getFullYear();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
                <div className="container-fluid justify-content-center">
                    <span className="footerText navbar-text">
                    Copyright&copy; Your Website {getCurrentYear()}
                    </span>
                </div>
            </nav>
        </div>
    )
}