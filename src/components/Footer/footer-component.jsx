import React from 'react';
import CookieConsent from "react-cookie-consent";

const Footer = () => {
    return (
        <div>
            <article className="mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    <img src="https://cdn.buymeacoffee.com/uploads/profile_pictures/2022/01/cf477816151278f1a94b2d2ccb1dde17.jpg@300w_0e.webp" className="br-100 h3 w3 dib"
                         title="Photo of a kitty staring at you" />
                        <h1 className="f4">Jhony Vidal</h1>
                        <hr className="mw3 bb bw1 b--black-10" />
                </div>
                <p className="lh-copy measure center f4 black-70">
                    Hi, I'm a full-stack web and mobile software developer building apps while learning new tools, techniques and sharing in this website as a way to help other developers like me saving time when dealing with similar projects. <a href="https://mrjhonyvidal.github.io/hire-me#contact-form" target="_blank" rel="noopener noreferrer" className="link pa3 green dim bg-animate hover-bg-yellow">Get in touch</a>
                </p>
            </article>
            <footer className="page-footer">
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