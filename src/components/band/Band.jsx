import React, {useState} from "react";

import JimmyImg from "../../assets/images/jimmyBehindBack.jpg";
import ErikImg from "../../assets/images/PhotoErik.jpg";
import ViktorImg from "../../assets/images/lenberg.jpg";
import SimonImg from "../../assets/images/simonSax.jpg";
import MickelImg from "../../assets/images/MickeNew.jpg";

const Band = ({bandMembers}) => {
    const [band] = useState([
        {
            picture: ErikImg,
            name: "Erik Petterson Sjöqvist",
            instrument: "Vocals ,Lead guitar, Keyboard, Banjo, Harmonica, Base",
            info: "Our own little camel back. He truly loves G# and his capo."
        },
        {
            picture: JimmyImg,
            name: "Jimmy Petterson",
            instrument: "Vocals, Guitar",
            info:
                "The ski bum, Jimmy Petterson, is the master of it all. Nobody can multi-task like this man."
        },
        {
            picture: SimonImg,
            name: "Simon Grahn",
            instrument: "Saxophone, Flute, Clarinet, Harmonica & Song",
            info:
                "Simon is an multi-instrumentalist that loves to battle the keys, and he always tries to be dynamic and initiative."
        },
        {
            picture: ViktorImg,
            name: "Viktor Lenberg",
            instrument: "Bass",
            info:
                "No one knows the base better than our own Viktor Lenberg, his groove cannot be missed."
        },

        {
            picture: MickelImg,
            name: "Mickel Löfvenius",
            instrument: "Drums",
            info:
                "Mickel Löfvenius is a key-member and he likes to call himseld master of logistics. His style is famous for being inoovative and awesome"
        }
    ]);

    const renderBand = band.map((member, i) => (
        <div key={i} className="b-band__member">
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
        <section ref={bandMembers} className="b-band">
            <h2 className="">Members</h2>
            <div className="b-band__container">{renderBand}</div>
        </section>
    );
};

export default Band;
