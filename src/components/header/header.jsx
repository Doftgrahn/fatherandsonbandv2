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
        this.props.slideTo(this.props.refs.hero);
    };

    render() {
        const {toggle, visible} = this.state;
        const {refs, slideTo} = this.props;

        return (
            <header className={`b-header ${visible ? "" : "hidden"}`}>
                <div
                    className="b-header__logo-wrapper"
                    onClick={this.slideToHomeLogo}
                >
                    <HeaderLogo />
                </div>
                <Navbar
                    refs={refs}
                    slideTo={slideTo}
                    toggle={toggle}
                    toggleOff={this.toggleOff}
                />
                <Hamburger toggle={toggle} toggleState={this.toggleState} />
            </header>
        );
    }
}

export default Header;
