import React, {useState} from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

import Crowd from "../../assets/images/gallery/crowd.jpg";
import ErikandMickel from "../../assets/images/gallery/erikMickel.jpg";
import Img from "../../assets/images/gallery/IMG_2845.jpg";
import Lake from "../../assets/images/gallery/lake.jpg";
import Mickel from "../../assets/images/gallery/Mickel.jpg";
import Ovation from "../../assets/images/gallery/ovation.jpg";
import Simon from "../../assets/images/gallery/Simon.jpg";
import Waldruhe from "../../assets/images/gallery/Waldruhe.jpg";
import Crazy from "../../assets/images/gallery/IMG_2105.jpg";
import Crazy2 from "../../assets/images/gallery/IMG_2107.jpg";
import NachBar from "../../assets/images/gallery/nachbar.jpg";

const Gallery = ({gallerySlide}) => {
    const [gallery] = useState([
        {id: 0, picture: Crowd, info: "photo by Simon"},
        {id: 1, picture: ErikandMickel},
        {id: 2, picture: Img},
        {id: 3, picture: Lake},
        {id: 4, picture: Mickel},
        {id: 5, picture: Ovation},
        {id: 6, picture: Simon},
        {id: 7, picture: Waldruhe},
        {id: 8, picture: Crazy},
        {id: 9, picture: Crazy2},
        {id: 10, picture: NachBar}
    ]);

    const pictures = gallery.map(pic => (
        <div className="b-gallery__container-img" key={pic.id}>
            <img src={pic.picture} alt="" />
            <p className="legend">{pic.info}</p>
        </div>
    ));

    return (
        <section ref={gallerySlide} className="b-gallery" id="gallery">
            <div className="b-gallery__wrapper ">
                <h2>Gallery</h2>
                <Carousel>{pictures}</Carousel>
            </div>
        </section>
    );
};

export default Gallery;

/*autoPlay*/
