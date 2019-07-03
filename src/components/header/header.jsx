import React, {Component} from "react";

import Navbar from "./navbar/navbar";
import Hamburger from "./hamburger/hamburger";

import {ReactComponent as HeaderLogo} from "../../assets/logo-header.svg";

class Header extends Component {
    state = {
        toggle: false,
        prevScrollpos: window.pageYOffset,
        visible: true
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const {prevScrollpos} = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos >= currentScrollPos;

        if (window && currentScrollPos >= 750) {
            this.setState({
                prevScrollpos: currentScrollPos,
                visible
            });
        }
    };

    toggleState = () => this.setState({toggle: !this.state.toggle});

    toggleOff = () => this.setState({toggle: false});

    slideToHomeLogo = () => {
        this.toggleOff();
        this.props.slideToHome();
    };

    render() {
        let {toggle, visible} = this.state;

        return (
            <header className={`b-header ${visible ? "" : "hidden"}`}>
                <div
                    className="b-header__logo-wrapper"
                    onClick={this.slideToHomeLogo}
                >
                    <HeaderLogo />
                </div>
                <Navbar
                    slidetoAboutBand={this.props.slidetoAboutBand}
                    slideToHome={this.props.slideToHome}
                    slideToMembers={this.props.slideToMembers}
                    slideToHistory={this.props.slideToHistory}
                    slideToTour={this.props.slideToTour}
                    slideToGallery={this.props.slideToGallery}
                    slideToMedia={this.props.slideToMedia}
                    slideToFooter={this.props.slideToFooter}
                    toggle={toggle}
                    toggleOff={this.toggleOff}
                />
                <Hamburger toggle={toggle} toggleState={this.toggleState} />
            </header>
        );
    }
}

export default Header;
