import React from "react";

export const Footer = () => {
    const getCurrentYear = () => new Date().getFullYear();
    return (
        <div>
            <nav className="navbar bg-body-tertiary text-dark bg-opacity-10">
                <div className="container-fluid justify-content-center">
                    <span className="footerText navbar-text">
                    Copyright&copy; Your Website {getCurrentYear()}
                    </span>
                </div>
            </nav>
        </div>
    )
}