import React, {useState} from "react";
import {NavHashLink as NavLink} from "react-router-hash-link";

const Navbar = ({toggle, toggleOff, store}) => {
    const [refs] = useState([
        {name: "Home", ref: "/home#hero"},
        {name: "About", ref: "home#about"},
        {name: "Members", ref: "/home/#members"},
        {name: "History", ref: "/home#history"},
        {name: "Gallery", ref: "/home#gallery"},
        {name: "Tour", ref: "/home#tour"},
        {name: "Contact", ref: "/contact#contact"},
        {name: "Press", ref: "/press#press"},
        {name: "Shop", ref: "/shop#shop"}
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
                    {store.amount ?  null : `Cart ${store.map(e => e.amount).reduce((a, b) => a + b)}`}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
