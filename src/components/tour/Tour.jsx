import React, {useState, useEffect} from "react";

import {database} from "../../general/firestoreconfig";

const Tour = ({tourSlide}) => {
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

    const tourdate = tour
        /*.filter(d => new Date() < new Date(d.date.toDate()))*/
        .sort((a, b) => a.date.seconds - b.date.seconds)
        .map((e, i) => {
            let date = e.date.toDate().toLocaleDateString();
            //let time = e.date.toDate().toLocaleTimeString();

            return (
                <p className={new Date() > new Date(e.date.toDate()) ? 'past' : ''} key={i}>
                    <span>{e.location}</span> <span>{date}</span>
                </p>
            );
        });

    return (
        <section ref={tourSlide} className="b-tour" id="tour">
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
