import React, {Component} from "react";

import Navbar from "./navbar/navbar";
import Hamburger from "./hamburger/hamburger";

import {ReactComponent as HeaderLogo} from "../../assets/logo-header.svg";

class Header extends Component {
    state = {
        toggle: false,
        class: ""
    };

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.listenScrollEvent);
    }

    listenScrollEvent = () => {
        if (window.scrollY > 100) {
            this.setState({class: "big"});
        } else {
            this.setState({class: ""});
        }
    };

    toggleState = () => {
        let {toggle} = this.state;
        this.setState({toggle: !toggle});
    };

    toggleOff = () => {
        this.setState({toggle: false});
    };
    slideToHomeLogo = () => {
        this.toggleOff();
        this.props.slideToHome();
    };

    render() {
        let {toggle} = this.state;
        let {
            slidetoAboutBand,
            slideToHome,
            slideToMembers,
            slideToHistory,
            slideToTour,
            slideToGallery,
            slideToFooter
        } = this.props;
        return (
            <header className={`b-header ${this.state.class}`}>
                <div
                    className="b-header__logo-wrapper"
                    onClick={this.slideToHomeLogo}
                >
                    <HeaderLogo />
                </div>
                <Navbar
                    slidetoAboutBand={slidetoAboutBand}
                    slideToHome={slideToHome}
                    slideToMembers={slideToMembers}
                    slideToHistory={slideToHistory}
                    slideToTour={slideToTour}
                    slideToGallery={slideToGallery}
                    slideToFooter={slideToFooter}
                    toggle={toggle}
                    toggleOff={this.toggleOff}
                />
                <Hamburger toggle={toggle} toggleState={this.toggleState} />
            </header>
        );
    }
}

export default Header;
