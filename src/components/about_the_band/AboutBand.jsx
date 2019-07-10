import React from "react";
import Fade from "react-reveal/Fade";

import image1 from "../../assets/images/bandet1.jpg";
import image2 from "../../assets/images/bandet.jpg";

const AboutBand = () => {
    return (
        <section className="b-info" id="about">
            <div className="b-info__wrapper">
                <Fade cascade duration={300}>
                    <div className="b-info__container">
                        <h2>About the band</h2>
                        <p>
                            The Father & Son Band really began as a gentle
                            evening tradition of a father singing his son to
                            sleep. At age four, Erik, the son, first helped dad,
                            Jimmy, on stage, singing Old McDonald into a
                            microphone while his dad played guitar at the
                            Spielberghaus in Saalbach.
                        </p>
                        <p>
                            Fast forward a few decades to the present day, and
                            Jimmy and Erik Petterson have added saxophonist,
                            Simon Grahn, bass player, Viktor Lenberg, drummer,
                            Mickel Löfvenius, to create a full band. Jimmy and
                            Erik have both written some of their own music in a
                            country-rock vein, but the band generally plays a
                            variety of well-known covers from the 1950s, 1960s,
                            and 1970s.
                        </p>

                        {/*<p>
                            Often, they perform a History of Rock ‘n’ Roll show,
                            which is divided into two halves with an
                            intermission. The first set sees the band enter the
                            stage with ’50s clothing, and play classics from
                            Elvis, Chuck Berry, Buddy Holly, Bill Haley, Sam
                            Cooke, the Drifters, Ben E. King, Dion and the
                            Belmonts, Johnny Cash, the Beachboys, and other
                            icons of the period. Following an intermission, the
                            group retx urns in hippy/flower-power garb and
                            continues their version of rock history with songs
                            by Bob Dylan, Simon and Garfunkel, the Beatles, the
                            Rolling Stones, Dr. Hook, John Denver, Creedence
                            Clearwater Revival, Jimi Hendrix, and many more of
                            the top acts of the ’60s and ’70s.
                        </p>*/}
                    </div>
                </Fade>
                <Fade cascade>
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
                </Fade>
            </div>
        </section>
    );
};

export default AboutBand;
