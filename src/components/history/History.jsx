import React from "react";
import Fade from "react-reveal/Fade";

import EarlyImg from "../../assets/historyImg/earlyImg.jpg";
import Frolunda from "../../assets/historyImg/frolunda.jpg";
import Venice from "../../assets/historyImg/IMG_8488.jpg";
import VenicePolice from "../../assets/historyImg/IMG_8491.jpg";

const History = () => {
    return (
        <section className="b-history" id="history">
            <div className="b-history__wrapper">
                <h2>History of the father & son band</h2>
                <div className="b-history__container">
                    <Fade cascade duration={300}>
                        <p>
                            <span>Erik Petterson Sjöqvist</span> and Elie
                            Sandberg met each other in 6th grade when they began
                            studying together in the special music section of
                            Flatåsskolan, in Gothenburg, Sweden. Seven years and
                            thousands of hours of music later, they both had
                            graduated from high school, and Erik’s father,
                            Jimmy, came up with a suggestion. “It’s time to get
                            some real world experience. . . take all you have
                            learned in the classroom, the school choir, and your
                            private lessons and take the show on the road.”
                        </p>
                    </Fade>
                    <div className="b-history__container-info">
                        <div className="b-history__container-info-img">
                            <img src={EarlyImg} alt="early" />
                        </div>
                        <div className="b-history__container-info-caption">
                            <span>
                                The original Father & Son + 1 trio in one of
                                their first performances (2008).
                            </span>
                        </div>
                    </div>
                    <Fade cascade duration={300}>
                        <div>
                            <p>
                                Jimmy organized a 15-country, two-month tour
                                through Europe that included 20 bona fide gigs
                                and 40 days of street-singing, and in June 2009,
                                the trio began living the vagabond life of
                                traveling minstrels in earnest. They called
                                themselves Father & Son + 1, and cut a CD before
                                embarking on the tour.
                            </p>
                            <p>
                                “The street is the best school in the world to
                                learn showmanship,” according to Jimmy. “People
                                are busy—hurrying around town with a thousand
                                things to do.
                            </p>
                        </div>
                        <div className="b-history__container-info">
                            <div className="b-history__container-info-img">
                                <img src={Venice} alt="Venice" />
                            </div>
                            <div className="b-history__container-info-caption">
                                <span>
                                    Erik and Elie learning the ropes on the
                                    streets of Venice (2009).
                                </span>
                            </div>
                        </div>
                    </Fade>
                    <Fade cascade duration={300}>
                        <div>
                            <p>
                                "You have to do something special to attract
                                their attention and get them to stop, listen,
                                and throw a few coins into your guitar case. I
                                spent a good part of 10 summers playing the
                                streets in the seventies and eighties, and it
                                was so much fun to get back to the street-music
                                scene with Erik and Elie in 2009. They learned a
                                lot, and I think you can see a product of their
                                street skills in the way they perform today.”
                            </p>
                        </div>

                        <div className="b-history__container-info">
                            <div className="b-history__container-info-img">
                                <img
                                    className="b-history__container-img"
                                    src={VenicePolice}
                                    alt="venice2"
                                />
                            </div>
                            <div className="b-history__container-info-caption">
                                <span>
                                    Street-singing often has it's drawbacks. . .
                                    like the police. The Venice performance did
                                    not last long.
                                </span>
                            </div>
                        </div>
                    </Fade>
                    <Fade cascade duration={300}>
                        <div>
                            <p>
                                For the next two summers, the group focused on
                                gigs in Austria, Finland and Norway, and at the
                                tail end of their third summer tour, they made
                                their Gothenburg debut with a special show at
                                the Frölunda Kulturhus. On Friday, Sept. 9, the
                                trio inaugurated a history of rock ‘n’ roll
                                show, which they have been performing on and off
                                ever since. During that show, they asked
                                saxophonist and singer, Simon Grahn, if he would
                                join them on stage as a guest artist for a few
                                numbers. For a couple of summers, Simon
                                continued to be a guest artist on the band’s
                                summer tour in Austria, and soon he was an
                                indispensible part of the band.
                            </p>

                            <div className="b-history__container-info">
                                <div className="b-history__container-info-img">
                                    <img src={Frolunda} alt="frolunda" />
                                </div>
                                <div className="b-history__container-info-caption">
                                    <span>
                                        Simon Grahn's initial performance with
                                        the band, at Frölunda Kulturhus (2009).
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade cascade duration={300}>
                        <div>
                            <p>
                                In 2015, the band expanded by adding a bass
                                player and drummer, and the band name was
                                changed from Father & Son + 1 to the Father and
                                Son Band. Mickel Löfvenius became the band’s
                                drummer, while the bass position has been filled
                                by a variety of people until today, Viktor
                                Lenberg is the permanent bass player.
                            </p>
                            <p>
                                Meanwhile, Erik was studying music production
                                home in Sweden. In 2017, Elie became a father
                                and had to leave the band. For the next two
                                summers, he was replaced by Simon Ericsson on
                                lead guitar. In the summer of 2018, the band
                                released their second CD—Rockin’, Rollin’, &
                                Ramblin,’ entirely produced by Erik in his home
                                studio. Erik also spent intensive hours
                                practicing lead guitar. For the summer of 2019,
                                Erik has left his keyboard to become the lead
                                guitarist. To make a long story short, the band,
                                in one form or another, has now been in
                                existence for more than a dozen years, and still
                                going strong.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default History;
