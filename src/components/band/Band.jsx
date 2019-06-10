import React, {useState} from "react";

import JimmyImg from "../../assets/images/jimmy.jpg";
import ErikImg from "../../assets/images/erikcamel.jpg";
import ViktorImg from "../../assets/images/lenberg.jpg";
import SimonPic from "../../assets/images/simon.jpg";
import MickelPic from "../../assets/images/Mickel.jpg";

const Band = ({bandMembers}) => {
    const [band] = useState([
        {
            picture: JimmyImg,
            name: "Jimmy Peterson",
            instrument: "Guitarr, Vox",
            info:
                "The ski bum, Jimmy Petterson, is the master of it all. Nobody can multi-task like this man."
        },
        {
            picture: ErikImg,
            name: "Erik Petterson Sjöqvist",
            instrument: "Lead guitar, Vox",
            info: "Our own little camel back. He truly loves G# and his capo."
        },
        {
            picture: ViktorImg,
            name: "Viktor Lenberg",
            instrument: "Bass",
            info:
                "No one knows the base better than our own Vikctor Lenberg, his groove cannot be missed."
        },
        {
            picture: SimonPic,
            name: "Simon Grahn",
            instrument: "Saxophone, flute, clarinet, harmonica & song",
            info:
                "Simon is an multi-instrumentalist that loves to battle the keys, and he always tries to be dynamic and initiative."
        },
        {
            picture: MickelPic,
            name: "Mickel Löfvenius",
            instrument: "Drums",
            info:
                "Mickel Löfvenius is a key-member and he likes to call himseld master of logistics. His style is famour for being inoovative ans awesome"
        }
    ]);

    const renderBand = band.map((member, i) => (
        <div key={i} className="b-band__member" data-aos="zoom-out-left">
            <img
                src={member.picture}
                className="b-band__member-img"
                alt={member.name}
            />
            <div className="b-band__member-info">
                <h3>{member.name}</h3>
                <p className="b-band__member-instrument">{member.instrument}</p>
                <p>{member.info}</p>
            </div>
        </div>
    ));

    return (
        <section ref={bandMembers} className="b-band" id="members">
            <h2 className="">Members</h2>
            <div className="b-band__container">{renderBand}</div>
        </section>
    );
};

export default Band;
