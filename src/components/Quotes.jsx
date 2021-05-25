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
            .then(setQuotesLength(quotes.length))
            .then(setTimeout(setLoading(false), 300))
    }, [author, quotes.length])

    useEffect(() => {
        
    }, [quotes])

    const handleChange = (e) => {
        const data = document.getElementById(e.target.value);
        const datakey = e.target.value;
        const author = datakey.replace(/[0-9]+/g,'').replace('-', '').replace('+', ' ')
        const quote = data.childNodes[1].childNodes[0].textContent;
        //const iconFav = data.childNodes[0].childNodes[0].childNodes[0].checked;
        const objeto = {
            key: datakey,
            author: author,
            quote: quote
        }
        if(!localStorage.getItem(datakey)) {
            window.localStorage.setItem(datakey, JSON.stringify(objeto));
        } else {
            localStorage.removeItem(datakey)
        }
    }

    return (
        <>
            {loading
                ? <CircularProgress />
                : quotesLength > 0
                    ? quotes.map(({quote_id, quote, author}) => {
                        return (
                            <FormControlLabel
                                className='Form__quotes'
                                key={quote_id}
                                id={author.replace(" ", "+") + "-" + quote_id}
                                onChange={handleChange}
                                control={<Checkbox
                                icon={<FavoriteBorder />}
                                checkedIcon={<Favorite />}
                                name={author.replace(" ", "+") + "-" + quote_id} />}
                                value={author.replace(" ", "+") + "-" + quote_id}
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