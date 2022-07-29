import React from 'react';
import ProductCard from '../ProductCard';
const ItemList = props => {
    const {productsArray, addProductHandler, removeProductHandler} = props
    return (
        <div className="row row-cols-1 row-cols-md-3 gap-3">
            {
            // extract objects from props and make cards products
            productsArray.map( (product) => {            
            return (
                <ProductCard 
                product={product} 
                addProductHandler={addProductHandler}
                removeProductHandler={removeProductHandler}
                />
            )
            })}
            
        </div>
    )
}
export default ItemList