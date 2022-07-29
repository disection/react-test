import React from 'react';
import { useState } from 'react';
import './App.css';
import products from './mocks/products';
import ItemList from './components/ItemList';

 
function App() { 
  // create state to add selected product in array
  const [ selectedProducts, setSelectedProducts ] = useState([])

  // handler selected with id product from products
  
   const addProduct = (id) =>{
    console.log(id)
    // brought the object
    const selectedProduct = products.find( product => product.id === id)
    console.log(selectedProduct)
    // send the object to array selectedProducts spread operator
    setSelectedProducts([...selectedProducts, selectedProduct])
   }
  return (
    <div className="App">
      <div className="conteiner-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>Catálogo de productos</h1>
            <ItemList 
            productsArray={products} 
            // variable is sent as a prop so that it can do a state survey when modulating the list
            addProductHandler={addProduct}/>
          </div>
          <div className="col-12 col-md-6">
            <h1>Carrito de compras</h1>            
              {
                // conditional rendering if selectedProducta is empty
                !selectedProducts.length ? <h2>Selecciona un producto de la lista</h2>:
                // extract objects from selectedProducts
                selectedProducts.map((product) => {
                  // destruct object product
                  const {id,title,price,description,rating, image}= product
                return (
                  <div className="row row-cols-1 row-cols-md-3">
                    <div className="col" key={id} /*key to not create conflicts in virtualDom */>
                      <div className="card h-100">
                        <img src={image} className='w-100' alt="" />
                        <h2 className="card-body">{title}</h2>
                        <p className="card-text">{description.substring(0,40)}</p>
                        <p className="card-text">{rating.rate}</p>
                        <p className="card-text">{price}</p>
                        <button type="button" className="btn btn-primary" >Agregar al carrito</button>
                      </div>
                    </div>
                  </div>)               
                })
              }
              
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
