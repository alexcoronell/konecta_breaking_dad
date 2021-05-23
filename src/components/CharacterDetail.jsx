import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Servicios
import { getCharacterDetail } from './../services/getCharacters';

// Componentes
import { CircularProgress, Button } from '@material-ui/core';

const CharacterDetail = () => {

    const {char_id} = useParams();

    const [characterDetail, setCharacterDetail] = useState({})
    const [loading, setLoading] = useState(false);
    const AppearanceList = (props) => {
        const appearance = props.item;
        let list;
        if(appearance) {
            list = appearance.map((appear) => {
              return <li className="appearanceList__item list-inline-item" key={appear}>{appear}</li>
            }) 
        } else {
            return list = '';
        }
    return (
        <ul className="appearanceList list-inline-item">{list}</ul>
      ); 
    }

    const OccupationList = (props) => {
        const appearance = props.item;
        let list;
        if(appearance) {
            list = appearance.map((occupation) => {
              return <li className="occupationList__item" key={occupation}>{occupation}</li>
            }) 
        } else {
            return list = '';
        }
    return list;
    }


    useEffect(() => {
        setLoading(true)
        getCharacterDetail(char_id)
            .then(characterDetail => setCharacterDetail(characterDetail))
            .then(() => {
                setTimeout(() => setLoading(false), 200);
            });
    }, [char_id])

    return (
        <main className="characterDetail container">
            {loading
                ?   <CircularProgress />
                :   <article className="characterDetail__card borderDefault row">
                        <picture className="characterDetail__card__picture borderDefault col-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3">
                            <img src={characterDetail.img} alt="" />
                        </picture>
                        <div className="characterDetail__card__containText borderDefault col-12 col-md-6 col-lg-7 col-xl-8 col-xxl-9">
                            <header className="characterDetail__card__containText__header">
                                <h1>{characterDetail.name}</h1>
                                <h2>Nickname: {characterDetail.nickname}</h2>
                            </header>
                            <div className="characterDetail__card__containText__content">
                                <p><b>Birthday:</b> {characterDetail.birthday}</p>
                                <p><b>Status:</b> {characterDetail.status}</p>
                                <p><b>Portrayed:</b> {characterDetail.portrayed}</p>
                                    <ul className="occupationList">
                                        <li><b>Occupation</b></li>
                                        <OccupationList item={characterDetail.occupation} />
                                    </ul>     
                                    <p className="list-inline-item"><b>Season Appearance:</b></p>
                                    <AppearanceList item={characterDetail.appearance} />                 
                            </div>
                        </div>
                        <Link to='/' className="card-link">
                            <Button className="mt-2" variant="outlined">Back</Button>
                        </Link>
                    </article>
            }
        </main>
    )
}

export default CharacterDetail
