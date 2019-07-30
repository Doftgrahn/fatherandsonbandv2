import React, {useState} from "react";
import Fade from "react-reveal/Fade";

import English from "./data/English";
import German from "./data/German";

/*--
High Resolution
--*/
import BehindBack from "../../assets/images/press/highres/gBehindBack.jpg";
import JimwailBoys from "../../assets/images/press/highres/wail.jpg";
import ForStuff from "../../assets/images/press/highres/4.jpg";
import ForStuff2 from "../../assets/images/press/highres/5.jpg";
import Dach from "../../assets/images/press/highres/dach.jpg";

/*--
LowRes
--*/
import LowBehindBack from "../../assets/images/press/lowres/gBehindBack.jpg";
import LowJimwailBoys from "../../assets/images/press/lowres/wail.jpg";
import LowForStuff from "../../assets/images/press/lowres/4.jpg";
import LowForStuff2 from "../../assets/images/press/lowres/5.jpg";
import LowDach from "../../assets/images/press/lowres/dach.jpg";

const Press = ({history}) => {
    const [pressImg] = useState([
        {name: "jimyBehindBack", highImg: BehindBack, lowImg: LowBehindBack},
        {name: "jimmyWail", highImg: JimwailBoys, lowImg: LowJimwailBoys},
        {name: "forStuff", highImg: ForStuff, lowImg: LowForStuff},
        {name: "stuff", highImg: ForStuff2, lowImg: LowForStuff2},
        {name: "Dach", highImg: Dach, lowImg: LowDach}
    ]);

    const [isGerman, setIsGerman] = useState(false);

    const englishLang = () => setIsGerman(false);
    const germanLang = () => setIsGerman(true);

    const languageRender = isGerman ? <German /> : <English />;

    const renderImages = pressImg.map((pic, i) => (
        <div className="picture_container" key={i}>
            <a href={pic.highImg} download>
                <img src={pic.lowImg} alt={pic.name} />
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
