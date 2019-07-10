import React, {Fragment} from "react";
import Fade from "react-reveal/Fade";

import {contacts} from "./contactList";

const Contact = () => {
    const renderContacts = contacts.map((info, i) => (
        <Fragment key={i}>
            <span>{info.title}</span>
            <a href={info.data} target={info.target} rel={info.rel} title={`Link to ${info.data}`}>
                {info.info}
            </a>
        </Fragment>
    ));

    return (
        <section className="b-contact" id="contact">
            <Fade cascade duration={300}>
                <div className="b-contact__wrapper">
                    <h2>Contact</h2>
                    <div className="b-contact__container">
                        <h3>Phone and email!</h3>
                        <div className="b-contact__container-phone">
                            {renderContacts}
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Contact;
