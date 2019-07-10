import React from "react";

import Fade from "react-reveal/Fade";

const References = () => {
    return (
        <section className="b-references" id="references">
            <Fade cascade duration={300}>
                <div className="b-references__wrapper">
                    <h2>Thank you for helping out</h2>
                    <div className="b-references__container">
                        <div className="b-references__container-people">
                            <h3>
                                Here are some people that really helped us along
                                the way!
                            </h3>
                            <div className="b-references__container-info">
                                <p>Mr Capo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default References;
