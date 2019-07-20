import React, {useState} from "react";
import Fade from "react-reveal/Fade";

import English from "./English";
import German from "./German";

import BehindBack from "../../assets/images/press/gBehindBack.jpg";
import JimwailBoys from "../../assets/images/press/wail.jpg";
import ForStuff from "../../assets/images/press/4.jpg";
import ForStuff2 from "../../assets/images/press/5.jpg";
import Dach from "../../assets/images/press/dach.jpg";

const Press = ({history}, props) => {
    const [pressImg] = useState([
        {name: "jimyBehindBack", img: BehindBack},
        {name: "jimmyWail", img: JimwailBoys},
        {name: "forStuff", img: ForStuff},
        {name: "stuff", img: ForStuff2},
        {name: "Dach", img: Dach}
    ]);

    const [isGerman, setIsGerman] = useState(false);

    const languageRender = isGerman ? <German /> : <English />;

    const englishLang = () => setIsGerman(false);
    const germanLang = () => setIsGerman(true);

    const renderImages = pressImg.map((pic, i) => (
        <div className="picture_container" key={i}>
            <a href={pic.img} download>
                <img src={pic.img} alt={pic.name} />
            </a>
        </div>
    ));

    return (
        <section className="b-press" id="press">
            <Fade cascade duration={300}>
                <div className="b-press__wrapper">
                    <h2>Press</h2>
                    <div className="b-press__container">
                        <div className="b-press__container-info">
                            <h3>Bio</h3>
                            <div className="language">
                                <h4
                                    className={!isGerman ? "isMarked" : ""}
                                    onClick={englishLang}
                                >
                                    English
                                </h4>

                                <h4
                                    className={isGerman ? "isMarked" : ""}
                                    onClick={germanLang}
                                >
                                    Deutsch
                                </h4>
                            </div>
                            <Fade spy={isGerman} duration={200}>
                                <div className="language_container">
                                    {languageRender}
                                </div>
                            </Fade>
                        </div>
                        <div className="b-press__container-info">
                            <h3>Gallery</h3>
                            <h4>Click on picture to download...</h4>
                            {renderImages}
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Press;
