import React, { useEffect, useState } from 'react'
import getQuotes from './../services/getQuotes';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';

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
                            <FormControlLabel
                                className='Form__quotes'
                                key={quote_id}
                                control={<Checkbox
                                icon={<FavoriteBorder />}
                                checkedIcon={<Favorite />}
                                name="checkedH" />}
                                label={<Typography className="quotes" paragraph>{quote}</Typography>}
                            />
                        )
                    })
                    : <Typography className="text-center" paragraph>No quotes</Typography>
            }
        </>
    )
}

export default React.memo(Quotes)