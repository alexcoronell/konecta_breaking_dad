import React from 'react'
import PropTypes from 'prop-types'

const Character = ({char_id, img, name, nickname}) => {

    return (
        <article className="character card mx-2" style={{width: '15rem'}}>
            <img src={img} className="card-img-top character__img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Apodo: <b>{nickname}</b></p>
            </div>

            <div className="card-body">
                <a href="/" className="card-link">More Info</a>
            </div>
        </article>
    )
}

Character.propTypes = {
    char_id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    nickname: PropTypes.string
}

export default Character
