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
            const time = e.date.toDate().toLocaleTimeString().match(/\d{2}:\d{2}|[AMP]+/g).join(' ')

            const replaceTag = (e) => {
                if (e.info && typeof e.info === "string" && e.info.includes("://www")) {
                    return (
                        <a target="_blank" rel="noopener noreferrer" href={e.info}>
                            Link
                        </a>
                    );
                } else if (e.phone) {
                    return <><span>{e.info}</span> <a href={`tel:${Number(e.phone)}`}>{e.phone}</a></>;
                } else {
                    return <span>{e.info}</span>;
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
                        <span>{replaceTag(e)}</span>
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
