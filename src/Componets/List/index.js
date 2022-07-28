import React from 'react';
import KoderCard from '../KoderCard';
const List = props => {
    const { koderList } = props
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 p-3">              
            { koderList.map((koder, index) => {            
            return (
                <KoderCard koder={ koder } key={index}/>
            )
            })}      

        </div>
    )
}

export default List