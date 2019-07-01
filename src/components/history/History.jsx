import React from "react";

import earlyImg from "../../assets/historyImg/earlyImg.jpg";
import Frolunda from "../../assets/historyImg/frolunda.jpg";
import Venice from "../../assets/historyImg/IMG_8488.jpg";
import VenicePolice from "../../assets/historyImg/IMG_8491.jpg";

//import Image2 from "../../assets/images/bandet.jpg";

const History = ({history}) => {
    return (
        <section ref={history} className="b-history" id="history">
            <div className="b-history__wrapper">
                <h2>History of the father & son band</h2>
                <div className="b-history__container">
                    <p>
                        <span>Erik Petterson Sjöqvist</span> and Elie Sandberg
                        met each other in 6th grade when they began studying
                        together in the special music section of Flatåsskolan.
                        Seven years and thousands of hours of music later, they
                        both had graduated from high school, and Erik’s father,
                        Jimmy, came up with a suggestion—“it’s time to get some
                        real world experience . . . take all you have learned in
                        the classroom, the school choir, and your private
                        lessons and take the show on the road.”
                    </p>
                    <div>
                        <img
                            className="b-history__container-img"
                            src={earlyImg}
                            alt="early"
                        />
                        <span className="b-history__container-caption">
                            The original Father & Son trio in one of their first
                            performances(2008).
                        </span>
                    </div>
                    <p>
                        Jimmy organized a 15-country, 2-month tour through
                        Europe that included 20 bona fide gigs and 40 days of
                        street-singing, and in June 2009, the trio began living
                        the vagabond life of traveling minstrels in earnest. The
                        trio called themselves Father & Son + 1, and cut a CD
                        before embarking on the tour.
                    </p>
                    <p>
                        “The street is the best school in the world to learn
                        showmanship,” according to Jimmy. “People are
                        busy—hurrying around town with a thousand things to do.
                    </p>
                    <img
                        className="b-history__container-img"
                        src={Venice}
                        alt="Venice"
                    />
                    <span>
                        Erik and Elie learning the ropes on the streets of
                        Venice (2009).
                    </span>
                    <p>
                        You have to do something special to attract their
                        attention and get them to stop, listen, and throw a few
                        coins into your guitar case. I spent a good part of 10
                        summers playing the streets in the seventies and
                        eighties, and it was so much fun to get back to the
                        street-music scene with Erik and Elie in 2009.
                    </p>
                    <img
                        className="b-history__container-img"
                        src={VenicePolice}
                        alt="venice2"
                    />
                    <span>
                        Street-singing often has it's drawbacks...like the
                        police. The Venice performance did not last long.
                    </span>
                    <p>
                        They learned a lot, and I think you can see a product of
                        their street skills in the show that we do today. ”For
                        the next two summers, the group focused on gigs in
                        Austria, Finland and Norway, and at the tail end of
                        their third summer tour, they made their Göteborg debut
                        with a special show at the Frölunda Kulturhus. On
                        Friday, Sept. 9, the trio inaugurated a history of rock
                        ‘n’ roll show, which they have been performing on and
                        off ever since. During that show, they asked saxophonist
                        and singer, Simon Grahn if he would join them on stage
                        as a guest artist for a few numbers. For a couple of
                        summers, Simon continued to be a guest artist on the
                        band’s summer tour in Austria, and soon he was an
                        indispensible part of the band.
                    </p>
                    <img
                        className="b-history__container-img"
                        src={Frolunda}
                        alt="frolunda"
                    />
                    <span>
                        Simon Grahn's initial performance with the band, at
                        Frölunda Kulturhus(2009).
                    </span>
                    <p>
                        In 2015, the band expanded by adding a bass player and
                        drummer, and their name was changed from Father & Son +
                        1 to the Father and Son Band. Mickel Lövenius became the
                        band’s drummer, while the bass position has been filled
                        by a variety of people until today, Viktor Lenberg is
                        the permanent bass player. Meanwhile, Erik was studying
                        music production home in Sweden. In 2018, the band
                        released their second CD—Rockin’, Rollin’, & Ramblin,’
                        entirely produced by Erik in his home studio. The band,
                        in one form or another, has now been in existence for
                        more than a dozen years, and still going strong.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default History;
