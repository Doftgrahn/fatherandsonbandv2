import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import bandInfo from './data/memberText';

const Band = () => {
    const [band] = useState(bandInfo || []);

    const renderBand = band.map((member, i) => (
        <div key={i} className='b-band__member'>
            <Fade cascade duration={300}>
                <figure>
                    <img
                        src={member.picture}
                        className='b-band__member-img'
                        alt={`Bandmember: ${member.name}`}
                    />
                </figure>
                <div className='b-band__member-info'>
                    <h3>{member.name}</h3>
                    <p className='b-band__member-instrument'>
                        {member.instrument}
                    </p>
                    <p>{member.info}</p>
                </div>
            </Fade>
        </div>
    ));

    return (
        <section className='b-band' id='members'>
            <h2>Members</h2>
            <div className='b-band__container'>{renderBand}</div>
        </section>
    );
};

export default Band;
