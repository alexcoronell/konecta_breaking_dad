import React, { useEffect, useState } from 'react'
import getQuotes from './../services/getQuotes';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';

const Quotes = (author) => {

    const [quotes, setQuotes] = useState([]);
    const [quotesLength, setQuotesLength] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getQuotes(author)
            .then(quote => setQuotes(quote))
    }, [author])

    useEffect(() => {
        
        setQuotesLength(quotes.length)
        setTimeout(setLoading(false), 10000)
    }, [quotes])

    return (
        <>
            {loading
                ? <CircularProgress />
                : quotesLength > 0
                    ? quotes.map(({quote_id, quote}) => {
                        return (
                            <Typography className="quotes" paragraph key={quote_id}>{quote}</Typography>
                        )
                    })
                    : <Typography paragraph>No quotes</Typography>
            }
        </>
    )
}

export default React.memo(Quotes)