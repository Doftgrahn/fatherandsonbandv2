import React, {useState} from "react";

import Rambling from "../../assets/shop/ramblingrocking.jpg";
import ComingOfAge from "../../assets/shop/comingOfAge.jpg";

const Shop = () => {
    const [cd, setCd] = useState([
        {
            id: 2,
            name: "Coming of Age",
            pic: ComingOfAge,
            price: 15,
            info:
                "This music CD is comprised of eleven songs–seven composed by Jimmy Petterson, his son Erik, and the third band member, Elie and four covers of well known hits. This is NOT the same CD as the one that comes with the book. Two of the songs are the same. The other nine cuts on this CD are available exclusively on this CD."
        },
        {
            id: 1,
            name: "Rocking, Rolling and Rambling",
            pic: Rambling,
            price: 15,
            info:
                "Father & Son + 1 eventually grew into a five-man band, and changed their name to the Father & Son Band. This is their newest CD. This is, once again, a combination of their own compositions and a number of cover songs that they feature regularly in their live performances. The songs included on this CD are:"
        }
    ]);

    const showCd = cd.map(img => (
        <div className="picture_container" key={img.id}>
            <h3>{img.name}</h3>
            <img src={img.pic} alt={img.name} />
            <div className="picture_container-details">
                <h3>€{img.price}</h3>
                <p>{img.info}</p>
            </div>
        </div>
    ));

    return (
        <section className="b-shop" id="shop">
            <div className="b-shop__wrapper">
                <h2>Shop</h2>
                <div className="b-shop__container-info">{showCd}</div>
            </div>
        </section>
    );
};

export default Shop;
