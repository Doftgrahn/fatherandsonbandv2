import React from "react";

import image1 from "../../assets/images/bandet1.jpg";
import image2 from "../../assets/images/bandet.jpg";

const AboutBand = ({aboutTheBand}) => {
    return (
        <section ref={aboutTheBand} className="b-info" id="about">
            <div className="b-info__wrapper">
                <div className="b-info__container">
                    <h2>About the band</h2>
                    <p>
                        The Father & Son Band really began as gentle evening
                        tradition of a father singing his son to sleep. At age
                        four, Erik, the son, first helped dad, Jimmy, on stage,
                        singing Old McDonald into a microphone.
                    </p>
                </div>
                <div className="b-info__images">
                    <img
                        src={image1}
                        alt="Father and son"
                        className="b-info__img"
                    />
                    <img
                        src={image2}
                        alt="Father and son"
                        className="b-info__img"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutBand;
