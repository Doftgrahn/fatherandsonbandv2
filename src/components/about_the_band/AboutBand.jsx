import React from 'react';

import Image1 from '../../assets/images/bandet1.jpg';
import Image2 from '../../assets/images/bandet.jpg';

const AboutBand = () => {
    return(  <section className="b-info" id="about">
    <div className="b-info__wrapper">
      <div className="b-info__container">
        <h2>About the band</h2>
        <p>
          The Father & Son Band really began as gentle evening tradition of a father singing his son to sleep. At age four, Erik, the son, first helped dad, Jimmy, on stage, singing Old McDonald into a microphone.
        </p>
      </div>
      <div className="b-info__images">
        <img data-aos="zoom-in-up" src={Image1} alt="Father and son" className="b-info__img" />
        <img data-aos="zoom-out-left" src={Image2} alt="Father and son" className="b-info__img" />
      </div>
    </div>
  </section>)
}



export default AboutBand;
