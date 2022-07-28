import React from 'react';
const KoderCart = props => {
    const { name, email, generation } = props.koder
    return (
        <div className="col">
            <div className="card">      
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{email}</p>
                <p className="card-text">{generation}</p>
                </div>
            </div>
        </div>
    )
}
export default KoderCart