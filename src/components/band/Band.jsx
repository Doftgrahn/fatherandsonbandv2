import React, {useEffect, useState} from "react";
import Fade from "react-reveal/Fade";

/*Band Info, in dataFolder*/
import {bandInfo} from "./data/memberText";
const url = "http://localhost:1337/bands";

const Band = () => {
    const [band, setBand] = useState(null);
    //const [band] = useState(bandInfo);

    useEffect(() => {
        fetch(url)
            .then(respJSON => respJSON.json())
            .then(resp => {
                setBand(resp);
            })
            .catch(err => console.log(err));
    }, []);

    let renderBand;
    if (band)
        renderBand = band.map((member, i) => (
            <div key={i} className="b-band__member">
                <Fade cascade duration={300}>
                    <img
                        src={`http://localhost:1337/${member.bandImg.url}`}
                        /*src={member.bandImg.url}*/
                        className="b-band__member-img"
                        alt={`Bandmember: ${member.name}`}
                    />
                    <div className="b-band__member-info">
                        <h3>{member.name}</h3>
                        <p className="b-band__member-instrument">
                            {member.instrument}
                        </p>
                        <p>{member.info}</p>
                    </div>
                </Fade>
            </div>
        ));

    return (
        <section className="b-band" id="members">
            <h2>Members</h2>
            <div className="b-band__container">{renderBand}</div>
        </section>
    );
};

export default Band;
