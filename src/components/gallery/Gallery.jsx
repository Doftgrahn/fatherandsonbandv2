import React, { useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { galleryPictures } from './data/galleryPictures';

const Gallery = () => {
    const [gallery] = useState(galleryPictures);

    const pictures = gallery.map(
        (pic, i) => (
            <div className='b-gallery__container-img' key={i}>
                <img src={pic} alt='GalleryPictures' />
            </div>
        ),
        []
    );

    return (
        <section className='b-gallery' id='gallery'>
            <div className='b-gallery__wrapper '>
                <h2>Gallery</h2>
                <Carousel
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    swipeable={true}>
                    {pictures}
                </Carousel>
            </div>
        </section>
    );
};

export default Gallery;

/*autoPlay*/
