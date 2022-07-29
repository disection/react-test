import React from 'react';
const ItemList = props => {
    const {productsArray, addProductHandler} = props
    return (
        <div className="row row-cols-1 row-cols-md-3 gap-3">
            {
            // extract objects from props and make cards products
            productsArray.map( (product) => {
            // destruct object product
            const {id,title,price,description,rating, image}= product
            return (
                <div className="col" key={id}>
                <div className="card h-100">
                    <img src={image} className='w-100' alt="" />
                    <h2 className="card-body">{title}</h2>
                    <p className="card-text">{description.substring(0,40)/* only see a part from description */}</p>
                    <p className="card-text">{rating.rate}</p>
                    <p className="card-text">{price}</p>
                    <button 
                    type="button" 
                    className="btn btn-primary" 
                    /* para agregar un parametro externo al handler se debe encapsular en una funtion por el id */
                    onClick={ () => {addProductHandler(id)} }>
                    Agregar al carrito</button>
                </div>
                </div>
            )
            })}
            
        </div>
    )
}
export default ItemList