import React from 'react'

const OccupationList = ({item}) => {
    return (
        <>
            <b>Occupation</b>
            <ul className="occupationList">
            {
                item !== undefined && item.map((item) => <li className="occupationList__item" key={item}>{item}</li>)
            }
        </ul>
        </>
    )
}

export default OccupationList
