import React, { useState, useEffect } from 'react'
import Character from './Character';
import Pagination from './Pagination';

const Characters = () => {

    const [characterList, setCharacterList] = useState([]);

    const url = "https://www.breakingbadapi.com/api/characters";

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setCharacterList(res))
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
