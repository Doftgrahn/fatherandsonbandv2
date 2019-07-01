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
        .sort((a, b) => a.date.seconds - b.date.seconds)
        .map((e, i) => {
            const date = e.date.toDate().toLocaleDateString();
            const time = e.date.toDate().toLocaleTimeString();

            const replaceTag = e => {
                if (e && typeof e === "string" && e.includes("://www")) {
                    return (
                        <a target="_blank" rel="noopener noreferrer" href={e}>
                            Link
                        </a>
                    );
                } else if (e && !isNaN(e)) {
                    return <a href={`tel:${Number(e)}`}>Reservation {e}</a>;
                } else {
                    return <span>{e}</span>;
                }
            };

            return (
                <div
                    className={`tour-details ${
                        new Date() > new Date(e.date.toDate()) ? "past" : ""
                    }`}
                    key={i}
                >
                    <div className="info-tour">
                        <span>{e.location}</span>
                        {replaceTag(e.info)}
                    </div>
                    <div className="date-tour">
                        <span>{date}</span>
                        <span>{time}</span>
                    </div>
                </div>
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
