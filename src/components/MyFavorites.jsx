import React, { useState, useEffect, useCallback } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';


const MyFavorites = () => {

    const [favQuotes, setFavQuotes] = useState([]);

    let quotesNumber = window.localStorage.length;


    const getFavQuotes = useCallback(() => {
        let data = [];
        setFavQuotes([])
        let quotesNumber = window.localStorage.length;
        if(quotesNumber >= favQuotes.length) {
            for (let i = 0; i <= quotesNumber -1; i++){
                const datakey = localStorage.key(i);
                const currentData = (JSON.parse(localStorage.getItem(datakey)));
                data.push(currentData);
            }
        }
        setFavQuotes(data)
    }, [favQuotes.length] )


   

    const handleChange = (e) => {
        localStorage.removeItem(e.target.name);
        getFavQuotes();
    }

    useEffect(() => {
        getFavQuotes()
    }, [getFavQuotes, quotesNumber])

  

    return (
        <main className="MyFavorites">
            <h1 className="mb-4">My favorite Quotes</h1>
            {favQuotes > 0 && <Typography className="quotes" paragraph>Delete</Typography>}
            {
                favQuotes.map(({key, author, quote}) => {
                    return (
                        <FormControlLabel
                                className='Form__quotes'
                                key={key}
                                id={key}
                                onChange={handleChange}
                                control={<Checkbox
                                icon={<FavoriteBorder/>}
                                title='Click for delete'
                                checkedIcon={<Favorite />}
                                checked='checked'
                                name={key} />}
                                value={key}
                                label={<Typography className="quotes" paragraph><span className="fs-5 text">{quote}</span> <p className="fw-bold fst-normal">{author}</p></Typography>}
                            />
                      );
                })
            }
        </main>
    )
}

export default MyFavorites
