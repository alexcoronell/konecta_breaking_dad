import React, { useEffect, useState } from 'react'
import getQuotes from './../services/getQuotes';

const Quotes = (author) => {

    const [quotes, setQuotes] = useState([]);
    const [quotesLength, setQuotesLength] = useState(0)

    useEffect(() => {
        getQuotes(author)
            .then(quote => setQuotes(quote))
    }, [author])

    useEffect(() => {
        setQuotesLength(quotes.length)
        console.log(quotes)
    }, [quotes])

    return (
        <ul className="quotesList">
            {quotesLength > 0
                ? quotes.map(({quote_id, quote}) => {
                    return (
                        <li className="quotesList__item" key={quote_id}>{quote}</li>
                    )
                })
                : <li>No data</li>
            }
        </ul>
    )
}

export default React.memo(Quotes)