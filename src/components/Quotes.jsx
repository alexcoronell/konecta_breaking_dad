import React, { useEffect, useState } from 'react'
import getQuotes from './../services/getQuotes';

const Quotes = (author) => {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        getQuotes(author)
            .then(quoteList => setQuotes(quoteList))
    }, [author])

    return (
        <ul className="quotesList pl-0 text-left">
            {quotes
                ? quotes.map(({quote_id, quote}) => {
                    return (
                        <li className="quotesList__item text-left" key={quote_id}>{quote}</li>
                    )
                })
                : <li>Sin Datos</li>
            }
        </ul>
    )
}

export default Quotes