import React from "react";

const Media = () => {
    const media = [
        {
            title: "promo-video",
            source: "https://www.youtube.com/embed/KETf1X72t_o"
        }
    ];

    const renderFilm = media.map((video, i) => (
        <div className="iframe-container" key={i}>
            <iframe title={video.title} src={video.source} />
        </div>
    ));

    return (
        <section className="b-media" id="media">
            <div className="b-media__wrapper">
                <h2>Media</h2>
                <div className="b-media__container">{renderFilm}</div>
            </div>
        </section>
    );
};

export default Media;

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/KETf1X72t_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfull screen></iframe>
*/
