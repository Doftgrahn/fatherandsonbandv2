import React from 'react';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';

import { ReactComponent as Instagram } from '../../assets/instagram.svg';

const Footer = ({footer}) => {
    return( <footer ref={footer} className="b-footer" id="contact">
    <div className="b-footer__wrapper">
      <div className="b-footer__info">
        <h4>Father & <br/>son band</h4>
        <p>© 2019 Father & Son Band</p>
      </div>



      <div className="b-footer__content">
        <div className="b-footer__content-contact">
          <p>Contact us</p>
          <span>Email: </span> <a href="mailto:Skibum@telia.com">Skibum@telia.com</a><br/>
          <span>Austrian Phone:</span> <a href="tel:>+436503100075">+43-650-3100075</a><br/>
          <span>Swedish Phone:</span> <a href="tel:>+46704386728">+46-704-386728</a><br/>
          <span>Finnish Phone:</span> <a href="tel:>+358417447657">+358-417447657</a><br/>
          <a target="_blank" rel="noopener noreferrer" href="https://www.skiingaroundtheworldbook.com/shop/">Go to Shop</a>
        </div>

        <div className="b-footer__content-social">
          <p>Follow us</p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/fatherandsonbandproject/">
            <Facebook/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fatherandson_band/">
            <Instagram/>
          </a>
        </div>
      </div>

      <div className="b-footer__content-creator">
      <p>Website produced by Simon Grahn</p>
      <a href="mailto:Simon.grahn@gmail.com">Contact me</a>
      </div>

    </div>
  </footer>)
}

export default Footer
