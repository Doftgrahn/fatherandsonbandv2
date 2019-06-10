import React, {useState, useEffect} from "react";

import {database} from "../../general/firestoreconfig";

const Tour = () => {
    const [tour, setTour] = useState([]);

    useEffect(() => {
        const userCollection = database.collection("tour");
        const unsubscribe = userCollection.onSnapshot(snapshot => {
            const list = [];
            snapshot.forEach(doc => {
                list.push({...doc.data(), postiD: doc.id});
            });
            setTour(list);
        });
        return unsubscribe;
    }, []);

    const tourdate = tour.map((e, i) => {
        let date = e.date.toDate().toLocaleDateString();
        //let time = e.date.toDate().toLocaleTimeString();
        return (
            <p key={i}>
                <span>{date}</span> <span>{e.location}</span>
            </p>
        );
    });
    console.log(tour);

    return (
        <section className="b-tour" id="tour">
            <div className="b-tour__wrapper">
                <h2>Summer Tour 2019</h2>
                <div className="b-tour__container">
                    <div className="b-tour__dates">{tourdate}</div>
                </div>
            </div>
        </section>
    );
};

export default Tour;
