import React, {useState} from "react";
import {NavHashLink as NavLink} from "react-router-hash-link";

const Navbar = ({toggle, toggleOff}) => {
    const [refs] = useState([
        {name: "Home", ref: "/home#hero"},
        {name: "About", ref: "home#about"},
        {name: "Members", ref: "/home/#members"},
        {name: "History", ref: "/home#history"},
        {name: "Gallery", ref: "/home#gallery"},
        {name: "Tour", ref: "/home#tour"},
        {name: "Contact", ref: "/contact#contact"},
        {name: "Press", ref: "/press#press"}
    ]);

    const navBar = refs.map((link, i) => (
        <li
            key={i}
            className="b-header__container-meny-links"
            onClick={toggleOff}
        >
            <NavLink
                className="b-header__container-meny-links"
                scroll={el =>
                    el.scrollIntoView({behavior: "smooth", block: "start"})
                }
                to={link.ref}
                title={link.name}
            >
                {link.name}
            </NavLink>
        </li>
    ));

    return (
        <div
            className={
                "b-header__container " +
                (toggle ? "b-header__container--active" : "")
            }
        >
            <ul className="b-header__container-meny">
                {navBar}
                <li className="b-header__container-meny-links">
                    <a
                        className="b-header__container-meny-links"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.skiingaroundtheworldbook.com/shop/"
                        title="Link to Shop"
                        onClick={() => toggleOff()}
                    >
                        Shop
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
