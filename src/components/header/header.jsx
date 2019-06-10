import React, {Component} from 'react';

import Navbar from './navbar/navbar';
import Hamburger from './hamburger/hamburger';

import {ReactComponent as HeaderLogo} from '../../assets/logo-header.svg';

class Header extends Component {

    state = {
        toggle: false
    }

    toggleState = () => {
        let {toggle} = this.state;
        this.setState({toggle: !toggle})
    }

    toggleOff = () => {
        this.setState({toggle: false})
    }

    render() {
        let {toggle} = this.state;
        let {slidetoAboutBand,slideToHome, slideToMembers,slideToHistory,slideToTour, slideToGallery,slideToFooter} = this.props;
        return (<header className="b-header">
            <div className="b-header__logo-wrapper"><HeaderLogo/></div>
            <Navbar
            slidetoAboutBand={slidetoAboutBand}
            slideToHome={slideToHome}
            slideToMembers={slideToMembers}
            slideToHistory={slideToHistory}
            slideToTour={slideToTour}
            slideToGallery={slideToGallery}
            slideToFooter={slideToFooter}
             toggle={toggle} toggleOff={this.toggleOff}/>
            <Hamburger toggle={toggle} toggleState={this.toggleState}/>
        </header>)
    }
}

export default Header;
