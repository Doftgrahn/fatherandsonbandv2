import React, {useState} from "react";
import Fade from "react-reveal/Fade";

import Rambling from "../../assets/shop/ramblingrocking.jpg";
import ComingOfAge from "../../assets/shop/comingOfAge.jpg";

import {ramblingText, comingOfAgeText} from "./data/text";

const Shop = ({addToBasket, deleteFromBasket}) => {
    const [cd] = useState([
        {
            id: 2,
            name: "Coming of Age",
            pic: ComingOfAge,
            price: 15,
            info: comingOfAgeText
        },
        {
            id: 1,
            name: "Rocking, Rolling and Rambling",
            pic: Rambling,
            price: 15,
            info: ramblingText
        }
    ]);

    const showCd = cd.map(img => (
        <div className="picture_container" key={img.id}>
            <h3>{img.name}</h3>
            <img src={img.pic} alt={img.name} />
            <div className="picture_container-details">
                <h3>€{img.price}</h3>
                <p>{img.info}</p>
                <button onClick={() => addToBasket(img)}>Add to basket</button>
                <button onClick={() => deleteFromBasket(img)}>Delete</button>
            </div>
        </div>
    ));

    return (
        <section className="b-shop" id="shop">
            <Fade cascade duration={300}>
                <div className="b-shop__wrapper">
                    <h2>Shop</h2>
                    <div className="b-shop__container-info">{showCd}</div>
                </div>
            </Fade>
        </section>
    );
};

export default Shop;
