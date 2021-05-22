import React, { useState, useEffect } from 'react'

// Componentes
import Character from './Character';
import Pagination from './Pagination';

// Servicios
import getCharacters from './../services/getCharacters';

const Characters = () => {

    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        getCharacters().then(characters => setCharacterList(characters));
    }, [])

    return (
        <main className="characters container-fluid">
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
        </main>
    )
}

export default Characters
