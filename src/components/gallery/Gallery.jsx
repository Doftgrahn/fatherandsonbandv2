import React, {useState} from "react";
//import Fade from "react-reveal/Fade";

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
import ErikSing from "../../assets/images/gallery/erikSing.jpg";

/*import NachBar from "../../assets/images/gallery/nachbar.jpg";*/

const Gallery = () => {
    const [gallery] = useState([
        Ovation,
        Crowd,
        ErikandMickel,
        Img,
        Lake,
        Mickel,
        Simon,
        Waldruhe,
        Crazy,
        Crazy2,
        ErikSing
    ]);

    const pictures = gallery.map(
        (pic, i) => (
            <div className="b-gallery__container-img" key={i}>
                <img src={pic} alt="GalleryPictures" />
            </div>
        ),
        []
    );

    return (
        <section className="b-gallery" id="gallery">
            <div className="b-gallery__wrapper ">
                <h2>Gallery</h2>
                <Carousel
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    swipeable={true}
                >
                    {pictures}
                </Carousel>
            </div>
        </section>
    );
};

export default Gallery;

/*autoPlay*/
