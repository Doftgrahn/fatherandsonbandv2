import React, {useState} from "react";
import Fade from "react-reveal/Fade";

import JimmyImg from "../../assets/images/jimmyBehindBack.jpg";
import ErikImg from "../../assets/images/PhotoErik.jpg";
import ViktorImg from "../../assets/images/viktor.jpg";
import SimonImg from "../../assets/images/simonSax.jpg";
import MickelImg from "../../assets/images/MickeNew.jpg";

const Band = () => {
    const [band] = useState([
        {
            picture: ErikImg,
            name: "Erik Petterson Sjöqvist",
            instrument: "Vocals, Lead guitar, Keyboard, Banjo & Harmonica",
            info:
                "Piano lessons from age 4, guitar instruction from age 10, 7 years of music classes at middle and high school, a year of musical-theater studies, voice courses at the Complete Vocal Institute in Copenhagen, and an intense course in music production. Erik has devoted his life to music. "
        },
        {
            picture: JimmyImg,
            name: "Jimmy Petterson",
            instrument: "Vocals & Guitar",
            info:
                "Jimmy is a Renaissance man, singer, showman ... yes, but also journalist, author, photographer, travel arranger, ski instructor, and philosopher. Perhaps we should merely say Lebensküntler, and leave it at that."
        },
        {
            picture: SimonImg,
            name: "Simon Grahn",
            instrument: "Saxophone, Flute, Clarinet, Harmonica & Song",
            info:
                "Simon is an multi-instrumentalist who gives endless soul and dynamic energy to everything he does. His smile and his music is contagious."
        },
        {
            picture: ViktorImg,
            name: "Viktor Lenberg",
            instrument: "Bass",
            info:
                "Viktor - also known as Dr. Groove - has done a musical journey through genres like rock, reggae, disco and soul. This mix makes him essential in bringing a funky flavor to the band’s rhythm section."
        },
        {
            picture: MickelImg,
            name: "Mickel Löfvenius",
            instrument: "Drums & Cajón",
            info:
                "Drummer, skier, sailor, carpenter, and lover, Mickel Löfvenius holds many skill sets. He grew up in the deep forest of northern Sweden. Rumor has it that he was raised by wild animals."
        }
    ]);

    const renderBand = band.map((member, i) => (
        <div key={i} className="b-band__member">
            <img
                src={member.picture}
                className="b-band__member-img"
                alt={`Bandmember: ${member.name}`}
            />
            <div className="b-band__member-info">
                <h3>{member.name}</h3>
                <p className="b-band__member-instrument">{member.instrument}</p>
                <p>{member.info}</p>
            </div>
        </div>
    ));

    return (
        <section className="b-band" id="members">
            <Fade cascade duration={500}>
                <div>
                    <h2>Members</h2>
                    <div className="b-band__container">{renderBand}</div>
                </div>
            </Fade>
        </section>
    );
};

export default Band;
