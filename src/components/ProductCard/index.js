import React from 'react';
const ProductCard = props => {
    const {product, addProductHandler, removeProductHandler} = props
    const {id,title,price,description,rating, image, purchased}= product
    return (
        <div className="col" >
            <div className="card h-100">
                <img src={image} className='w-100' alt="" />
                <h2 className="card-body">{title}</h2>
                <p className="card-text">{description.substring(0,40)/* only see a part from description */}</p>
                <p className="card-text">{rating.rate}</p>
                <p className="card-text">{price}</p>
                {!purchased ? (
                    <button 
                    type="button" 
                    className="btn btn-primary" 
                    /* to add an external parameter to the handler it must be encapsulated in a function by the id*/
                    onClick={ () => {addProductHandler(id)} }>
                    Agregar al carrito</button>   
                ):(
                    <button 
                    type="button" 
                    className="btn btn-warning" 
                    /* to add an external parameter to the handler it must be encapsulated in a function by the id*/
                    onClick={ () => {removeProductHandler(id)} }>
                    Eliminar</button>
                )}
                
            </div>
        </div>
    )
}
export default ProductCard