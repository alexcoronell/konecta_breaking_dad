import React from 'react'

const AppearanceList = ({item}) => {
    return (
        <ul className="appearanceList list-inline-item">
            <li><b>Season Appearance:</b></li>
            {
                item !== undefined && item.map((item) => <li className="appearanceList__item list-inline-item" key={item}>{item}</li>)
            }
            
        </ul>
    )
}

export default AppearanceList
