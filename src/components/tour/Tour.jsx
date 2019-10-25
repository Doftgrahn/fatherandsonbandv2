import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import { database } from '../../general/firestoreconfig';

const Tour = ({ season }) => {
    const [tour, setTour] = useState([]);

    useEffect(() => {
        const userCollection = database.collection(season);
        const unsubscribe = userCollection.onSnapshot(snapshot => {
            const list = [];
            snapshot.forEach(doc => {
                const tourData = {
                    info: doc.data().info,
                    location: doc.data().location,
                    date: doc.data().date,
                    dateTo: doc.data().dateTo,
                    phone: doc.data().phone,
                    id: doc.id
                };
                list.push(tourData);
            });
            setTour(list);
            localStorage.setItem('tour', JSON.stringify(list));
        });
        return unsubscribe;
    }, [season]);

    let tourdate = null;
    if (tour)
        tourdate = tour
            .sort((a, b) => a.date.seconds - b.date.seconds)
            .map(e => {
                const reg = /\d{2}:\d{2}|[AMP]+/g;
                const options = {
                    day: 'numeric',
                    month: 'short'
                };
                const date = e.date
                    .toDate()
                    .toLocaleDateString('en-GB', options);
                const time = e.date
                    .toDate()
                    .toLocaleString('en-GB', {
                        timeZone: 'Europe/Stockholm',
                        timeZoneName: 'short'
                    })
                    .match(reg)
                    .join(' ');

                let timeTo;
                if (e.dateTo)
                    timeTo = e.dateTo
                        .toDate()
                        .toLocaleString('en-GB', {
                            timeZone: 'Europe/Stockholm',
                            timeZoneName: 'short'
                        })
                        .match(reg)
                        .join(' ');

                const replaceTag = data => {
                    if (data.info && data.info.includes('://www')) {
                        return (
                            <span>
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href={data.info}>
                                    Link
                                </a>
                            </span>
                        );
                    } else if (data.phone) {
                        return (
                            <>
                                <span> {data.info}: </span>
                                <span>
                                    <a href={`tel:${Number(data.phone)}`}>
                                        {data.phone}
                                    </a>
                                </span>
                            </>
                        );
                    } else {
                        return <span> {data.info} </span>;
                    }
                };

                return (
                    <div
                        className={`tour-details ${
                            new Date() > new Date(e.date.toDate()) ? 'past' : ''
                        }`}
                        key={`key:${e.id}`}>
                        <div className='info-tour'>
                            <span className='location'> {e.location} </span>
                            <span> {replaceTag(e)} </span>
                        </div>
                        <div className='date-tour'>
                            {e.location === 'Private Event' ? (
                                <span> {date} </span>
                            ) : (
                                <>
                                    <span> {date} </span>
                                    <span>
                                        {' '}
                                        {time}{' '}
                                        {timeTo ? <> -{timeTo} </> : null}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                );
            });

    return (
        <section className='b-tour' id='tour'>
            <Fade cascade duration={300}>
                <div className='b-tour__wrapper'>
                    <h2> Winter Tour 2019 </h2>{' '}
                    <div className='b-tour__container'>
                        <div className='b-tour__dates'> {tourdate} </div>{' '}
                    </div>{' '}
                </div>{' '}
            </Fade>{' '}
        </section>
    );
};

export default Tour;
