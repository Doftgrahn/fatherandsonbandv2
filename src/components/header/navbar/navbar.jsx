import React, {Component} from "react";
import {HashLink as Link} from "react-router-hash-link";

class Navbar extends Component {
    state = {
        refs: [
            {name: "Home", ref: "/home#hero"},
            {name: "About", ref: "home/#about"},
            {name: "Members", ref: "/home/#members"},
            {name: "History", ref: "/home#history"},
            {name: "Gallery", ref: "/home#gallery"},
            {name: "Tour", ref: "/home#tour"},
            {name: "Contact", ref: "/contact#contact"},
            {name: "Press", ref: "/press#press"}
        ]
    };

    navBar = this.state.refs.map((link, i) => (
        <li
            key={i}
            className="b-header__container-meny-links"
            onClick={this.props.toggleOff}
        >
            <Link className="b-header__container-meny-links" to={link.ref}>
                {link.name}
            </Link>
        </li>
    ));

    render() {
        let {toggle, toggleOff} = this.props;
        return (
            <div
                className={
                    "b-header__container " +
                    (toggle ? "b-header__container--active" : "")
                }
            >
                <ul className="b-header__container-meny">
                    {this.navBar}
                    <li className="b-header__container-meny-links">
                        <a
                            className="b-header__container-meny-links"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.skiingaroundtheworldbook.com/shop/"
                            onClick={() => toggleOff()}
                        >
                            Shop
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
