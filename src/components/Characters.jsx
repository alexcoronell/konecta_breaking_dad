import React, { useState, useEffect } from 'react'

// Componentes
import Character from './Character';
import { CircularProgress, Button, ButtonGroup } from '@material-ui/core';

// Hooks
import { useCharacters } from './../hooks/useCharacters';

// Servicios
import getCharacters, { getCharactersAll } from './../services/getCharacters';


const Characters = () => {

    const [characterList, setCharacterList] = useState([]);

    const [loading, setLoading] = useState(false)

    const [handleFirstPage, handlePrevPage, handleNextPage, handleLastPage, page] = useCharacters()

    const [maxPage, setMaxPage] = useState(0);


    useEffect(() => {
        setLoading(true)
        getCharacters()
            .then(characters => setCharacterList(characters))
            .then(() => {
                setTimeout(() => setLoading(false), 100);
            });
        getCharactersAll()
            .then(charactersAll => {
                setMaxPage(charactersAll);
            })
            .then(console.log(maxPage))
    }, [maxPage])

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
                <Button onClick={handleFirstPage}>First</Button>
                <Button onClick={handlePrevPage}>Prev</Button>
                <Button className="currentPage">{page + 1}</Button>
                <Button onClick={handleNextPage}>Next</Button>
                <Button onClick={() => handleLastPage(maxPage)}>Last</Button>
            </ButtonGroup>
            </>
            }
        </main>
    )
}

export default Characters
