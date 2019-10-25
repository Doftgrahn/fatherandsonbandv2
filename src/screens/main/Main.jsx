import React from 'react';
import Hero from '../../components/hero/hero';
import AboutBand from '../../components/about_the_band/AboutBand';
import Band from '../../components/band/Band';
import History from '../../components/history/History';
import Tour from '../../components/tour/Tour';
import Media from '../../components/media/Media';
import Gallery from '../../components/gallery/Gallery';

const Main = () => {
    const tourStuff = {
        summer2019: 'tour',
        winter2019: 'wTour'
    };

    return (
        <div className='App'>
            <Hero />
            <AboutBand />
            <Band />
            <History />
            <Gallery />
            <Media />
            <Tour season={tourStuff.winter2019} />
        </div>
    );
};

export default Main;
