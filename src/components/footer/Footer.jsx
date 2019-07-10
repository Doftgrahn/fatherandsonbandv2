import React from "react";
import Fade from "react-reveal/Fade";

import {HashLink as Link} from "react-router-hash-link";

import {ReactComponent as Facebook} from "../../assets/facebook.svg";
import {ReactComponent as Instagram} from "../../assets/instagram.svg";

const Footer = () => {
    const getYear = new Date().getFullYear();

    return (
        <footer className="b-footer" id="contact">
            <Fade cascade duration={300}>
                <div className="b-footer__wrapper">
                    <div className="b-footer__container">
                        <div className="b-footer__info">
                            <h4>
                                Father & <br />
                                son band
                            </h4>
                            <p>© {getYear} Father & Son Band</p>
                        </div>

                        <div className="b-footer__content-social">
                            <p>Follow us</p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/fatherandsonbandproject/"
                                title="Facebook"
                            >
                                <Facebook />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/fatherandson_band/"
                                title="Instagram"
                            >
                                <Instagram />
                            </a>
                        </div>
                    </div>
                    <div className="b-footer__content-references">
                        <Link to="/references#references" title="References">
                            Folks who helped us along the way!
                        </Link>
                    </div>
                    <div className="b-footer__content-creator">
                        <p>Website produced by Simon Grahn</p>
                        <a href="mailto:Simon.grahn@gmail.com" title="Link to Creator of WebPage">Contact me</a>
                    </div>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
