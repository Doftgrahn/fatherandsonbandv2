import React, {Component} from "react";

class Navbar extends Component {
    slideToAbout = () => {
        this.props.toggleOff();
        this.props.slidetoAboutBand();

    };
    slideToHome = () => {
        this.props.toggleOff();
        this.props.slideToHome();
    };
    slideToMembers = () => {
        this.props.toggleOff();
        this.props.slideToMembers();
    };
    slideToHistory = () => {
        this.props.toggleOff();
        this.props.slideToHistory();
    };
    slideToGallery = () => {
        this.props.toggleOff();
        this.props.slideToGallery();
    };
    slideToMedia = () => {
        this.props.toggleOff();
        this.props.slideToMedia();
    }
    slideToTour = () => {
        this.props.toggleOff();
        this.props.slideToTour();
    };

    slideToFooter = () => {
        this.props.toggleOff();
        this.props.slideToFooter();
    };

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
                    <li
                        className="b-header__container-meny-links"
                        onClick={this.slideToHome}
                    >
                        {" "}
                        Home
                    </li>
                    <li
                        className="b-header__container-meny-links"
                        onClick={this.slideToAbout}
                    >
                        About
                    </li>
                    <li
                        className="b-header__container-meny-links"
                        onClick={this.slideToMembers}
                    >
                        Members
                    </li>
                    <li
                        className="b-header__container-meny-links"
                        onClick={this.slideToHistory}
                    >
                        History
                    </li>
                    <li
                        className="b-header__container-meny-links"
                        onClick={this.slideToGallery}
                    >
                        Gallery
                    </li>
                    {/*<li
                        className="b-header__container-meny-links"
                        onClick={this.slideToMedia}
                    >
                        Media
                    </li>*/}
                    <li
                        className="b-header__container-meny-links"
                        onClick={this.slideToTour}
                    >
                        Tour
                    </li>

                    <li
                        className="b-header__container-meny-links"
                        onClick={this.slideToFooter}
                    >
                        Contact
                    </li>
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
