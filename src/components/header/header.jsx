import React, {Component} from "react";

import Navbar from "./navbar/navbar";
import Hamburger from "./hamburger/hamburger";
import {HashLink as Link} from "react-router-hash-link";

import {ReactComponent as HeaderLogo} from "../../assets/logo-header.svg";

class Header extends Component {
    state = {
        toggle: false,
        class: ""
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        //const {prevScrollpos} = this.state;
        const currentScrollPos = window.pageYOffset;
        //const visible = prevScrollpos >= currentScrollPos;

        if (window && currentScrollPos >= 420) {
            this.setState({
                class: "small"
            });
        } else {
            this.setState({class: ""});
        }
    };

    toggleState = () => this.setState({toggle: !this.state.toggle});

    toggleOff = () => this.setState({toggle: false});
    slideToHomeLogo = () => this.toggleOff();

    render() {
        const {toggle} = this.state;

        return (
            <header className={`b-header ${this.state.class}`}>
                <div className="b-header__logo-wrapper">
                    <Link to="/home#hero">
                        <HeaderLogo />
                    </Link>
                </div>
                <Navbar toggle={toggle} toggleOff={this.toggleOff} />
                <Hamburger toggle={toggle} toggleState={this.toggleState} />
            </header>
        );
    }
}

export default Header;

//{/*<header className={`b-header ${visible ? "" : "hidden"}`}>*/}
