import React, { useState, useEffect } from 'react'

// Componentes
import Character from './Character';
import { CircularProgress, Button, ButtonGroup } from '@material-ui/core';


// Servicios
import getCharacters from './../services/getCharacters';

const INITIAL_PAGE = 0;

const Characters = () => {

    const [characterList, setCharacterList] = useState([]);

    const [loading, setLoading] = useState(false)

    const [page, setPage] = useState(INITIAL_PAGE);

    //const [maxPage, setMaxPage] = useState(0)

    const handleNextPage = () => {
        setPage(page + 1)
        console.log(page);
    }

    const handlePrevPage = () => {
        if (page > 0) {
            setPage(page -1)
        } else {
            return;
        }
    }

    useEffect(() => {
        setLoading(true)
        getCharacters()
            .then(characters => setCharacterList(characters))
            .then(() => {
                setTimeout(() => setLoading(false), 50);
            });
    }, [])

    useEffect(() => {
        setLoading(true)
        getCharacters(page)
            .then(characters => setCharacterList(characters))
            .then(() => {
                setTimeout(() => setLoading(false), 50);
            });
    }, [page])

    return (
        <main className="characters container-fluid">
           { loading
           ? <> <h1>Characters</h1>
                <CircularProgress />
            </>
           : <>
                <h1>Characters</h1>
            <section className="characters__list row">
            {
                characterList.map(({char_id, img, name, nickname}) => {
                    return (
                        <Character
                            key={char_id}
                            char_id = {char_id}
                            img = {img}
                            name = {name}
                            nickname = {nickname}
                        />
                    )
                })
            }
            </section>
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                <Button onClick={handlePrevPage}>Prev</Button>
                <Button className="currentPage">{page + 1}</Button>
                <Button onClick={handleNextPage}>Next</Button>
            </ButtonGroup>
            </>
            }
        </main>
    )
}

export default Characters
