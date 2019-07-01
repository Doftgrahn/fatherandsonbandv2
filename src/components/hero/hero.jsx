import React from "react";
import {ReactComponent as Logo} from "../../assets/logo.svg";
import Image from "../../assets/images/hero.jpg";

const Hero = ({hero}) => {
    return (
        <div ref={hero} className="b-hero" id="home">
            <img src={Image} alt="Father and son" className="b-hero__image" />
            <div className="b-hero__content">
                <div className="wrapper">
                    <Logo />
                </div>
                <h1>Father & Son Band</h1>
                {/*<p>Playing in G# since 1900</p>*/}
            </div>
        </div>
    );
};

export default Hero;
