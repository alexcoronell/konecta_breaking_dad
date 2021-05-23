import React, { useEffect, useState } from 'react'
import getQuotes from './../services/getQuotes';

const Quotes = (author) => {

    const [loading, setLoading] = useState(false);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        setLoading(true)
        getQuotes(author)
            .then(quoteList => setQuotes(quoteList))
            .then(() => {
                setTimeout(() => setLoading(false), 50);
            });
    }, [author])

    useEffect(() => {
        console.log("Me cargo")
    }, [quotes])

    return (
        <ul className="quotesList pl-0 text-left">
            {
                quotes.map(({quote_id, quote}) => {
                    return (
                        <li className="quotesList__item text-left" key={quote_id}>{quote}</li>
                    )
                })
            }
        </ul>
    )
}

export default Quotes