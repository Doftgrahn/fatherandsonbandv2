import React from "react";

const Media = ({media}) => {
    return (
        <section ref={media} className="b-media">
            <div className="b-media__wrapper">
                <h2>Media</h2>
                <div className="b-media__container">
                    <p>Media goes here</p>
                </div>
            </div>
        </section>
    );
};

export default Media;
