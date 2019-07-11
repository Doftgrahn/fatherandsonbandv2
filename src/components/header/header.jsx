import React, {useState, useEffect} from "react";
import {HashLink as Link} from "react-router-hash-link";

import {ReactComponent as HeaderLogo} from "../../assets/logo-header.svg";

import Navbar from "./navbar/navbar";
import Hamburger from "./hamburger/hamburger";

import {Fade} from "react-reveal";

const Header = (props) => {
    console.log(props);
    const [mount, setMount] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [className, setClassName] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        let isSubscribed = true;
        if (isSubscribed) {
            setMount(true);
        }
        return () => (isSubscribed = true);
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        currentScrollPos >= 420 ? setClassName("small") : setClassName("");
    };

    const toggleState = () => setToggle(!toggle);
    const toggleOff = () => setToggle(false);

    return (
        <header>
            <Fade top spy={mount} duration={300}>
                <div className={`b-header ${className}`}>
                    <div className="b-header__logo-wrapper">
                        <Link to="/home#hero" title="to Top">
                            <HeaderLogo />
                        </Link>
                    </div>

                    <Navbar store={props.store} toggle={toggle} toggleOff={toggleOff} />
                    <Hamburger toggle={toggle} toggleState={toggleState} />
                </div>
            </Fade>
        </header>
    );
};

export default Header;

//{/*<header className={`b-header ${visible ? "" : "hidden"}`}>*/}
