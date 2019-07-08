import React from "react";
import Fade from "react-reveal/Fade";

import {HashLink as Link} from "react-router-hash-link";

import {ReactComponent as Facebook} from "../../assets/facebook.svg";
import {ReactComponent as Instagram} from "../../assets/instagram.svg";

const Footer = () => {
    const getYear = new Date().getFullYear();

    return (
        <footer className="b-footer" id="contact">
            <Fade cascade duration={500}>
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
                                href="https://w ww.facebook.com/fatherandsonbandproject/"
                            >
                                <Facebook />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/fatherandson_band/"
                            >
                                <Instagram />
                            </a>
                        </div>
                    </div>
                    <div className="b-footer__content-references">
                        <Link to="/references#references">
                            Folks who helpes us along the way
                        </Link>
                    </div>
                    <div className="b-footer__content-creator">
                        <p>Website produced by Simon Grahn</p>
                        <a href="mailto:Simon.grahn@gmail.com">Contact me</a>
                    </div>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
