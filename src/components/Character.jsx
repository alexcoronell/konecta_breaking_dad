import React from 'react'

const Character = ({char_id, img, name, nickname, birthday, occupation}) => {
    return (
        <article className="character card mx-2" style={{width: '15rem'}} key={char_id}>
            <img src={img} className="card-img-top character__img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Apodo: <b>{nickname}</b></p>
                <p className="card-text">Fecha Nacimiento: <br />{birthday === 'Unknown' ? 'Desconocida' : birthday}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Ocupaciones</b></li>
                    {
                        occupation.map((item) => {
                            return <li className="list-group-item">{item}</li>
                        } )
                    }
            </ul>
            <div className="card-body">
                <a href="/" className="card-link">Card link</a>
                <a href="/" className="card-link">Another link</a>
            </div>
        </article>
    )
}

export default Character
