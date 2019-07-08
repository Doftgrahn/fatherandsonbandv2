import React, {Component} from "react";

class Navbar extends Component {
    state = {
        refs: [
            {name: "Home", ref: this.props.refs.hero},
            {name: "About", ref: this.props.refs.aboutTheBand},
            {name: "Members", ref: this.props.refs.bandMembers},
            {name: "History", ref: this.props.refs.history},
            {name: "Gallery", ref: this.props.refs.gallery},
            {name: "Tour", ref: this.props.refs.tour},
            {name: "Contact", ref: this.props.refs.footer}
        ]
    };

    slideTo = ref => {
        this.props.toggleOff();
        this.props.slideTo(ref);
    };

    navBar = this.state.refs.map((link, i) => (
        <li
            key={i}
            className="b-header__container-meny-links"
            onClick={() => this.slideTo(link.ref)}
        >
            {link.name}
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
