import React, { useState, useEffect } from 'react'

// Componentes
import Character from './Character';
import Pagination from './Pagination';
import { CircularProgress } from '@material-ui/core'

// Servicios
import getCharacters from './../services/getCharacters';

const INITIAL_PAGE = 0;

const Characters = () => {

    const [characterList, setCharacterList] = useState([]);

    const [loading, setLoading] = useState(false)

    const [page, setPage] = useState(INITIAL_PAGE);

    useEffect(() => {
        setLoading(true)
        getCharacters()
            .then(characters => setCharacterList(characters))
            .then(() => {
                setTimeout(() => setLoading(false), 500);
            });
    }, [])

    useEffect(() => {
        
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
            <Pagination />
            </>
            }
        </main>
    )
}

export default Characters
