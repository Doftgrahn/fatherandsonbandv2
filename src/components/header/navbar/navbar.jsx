import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        let {toggle, toggleOff} = this.props;
        return (
            <div className={"b-header__container " + (toggle ? 'b-header__container--active' : '')}>
      <ul className="b-header__container-meny">
        <li><a className="b-header__container-meny-links" data-scroll="home" href="index.html" onClick={ () => toggleOff() }> Home</a></li>
        <li><a className="b-header__container-meny-links" data-scroll="about" href="home.html" onClick={ () => toggleOff() } >About</a></li>
        <li><a className="b-header__container-meny-links" data-scroll="members" href="home.html" onClick={ () => toggleOff() }>Members</a></li>
        <li><a className="b-header__container-meny-links" data-scroll="history" href="home.html" onClick={ () => toggleOff() }>History</a></li>
        <li><a className="b-header__container-meny-links" data-scroll="tour" href="home.html" onClick={ () => toggleOff() }>Tour</a></li>
        <li><a className="b-header__container-meny-links" data-scroll="gallery" href="home.html" onClick={ () => toggleOff() }>Gallery</a></li>
        <li><a className="b-header__container-meny-links" data-scroll="contact" href="home.html" onClick={ () => toggleOff() }>Contact</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.skiingaroundtheworldbook.com/shop/" onClick={ () => toggleOff() }>Shop</a></li>
      </ul>
    </div>)
    }
}

export default Navbar;
