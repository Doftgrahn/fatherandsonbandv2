import React from "react";

import Fade from "react-reveal/Fade";

import {refData} from "./data/refData";

const References = () => {
    const referencesData = refData
        .sort()
        .map((contact, i) => <li key={i}>{contact}</li>);

    return (
        <section className="b-references" id="references">
            <Fade cascade duration={300}>
                <div className="b-references__wrapper">
                    <h2>Thank you for helping out</h2>
                    <div className="b-references__container">
                        <div className="b-references__container-people">
                            <h3>
                                Many thanks to various photographers that have
                                been kind enough to join us at concerts, take
                                photographs, and allow us to use them. Thanks
                                go, among others to:
                            </h3>
                            <div className="b-references__container-info">
                                <ul>{referencesData}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default References;
