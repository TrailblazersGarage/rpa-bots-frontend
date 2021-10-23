import React from 'react';
import CookieConsent from "react-cookie-consent";

const Footer = () => {
    return (
        <div>
            <footer className="page-footer">
                    <small>Coded with <span>❤</span> by <a href="http://mrjhonyvidal.github.io/" target="_blank" className="link green dim bg-animate hover-bg-yellow">Jhony Vidal</a>.</small>
                    <CookieConsent
                        location="bottom"
                        buttonText="Accept"
                        cookieName="9dappsCookie"
                        style={{ fontSize: "12px", background: "#2B373B" }}
                        buttonStyle={{ background: "#009EDB", color: "#fff", fontSize: "13px" }}
                        expires={150}
                    >
                        This website uses cookies to enhance the user experience.{" "}
                    </CookieConsent>
            </footer>
        </div>
    );
};

export default Footer;