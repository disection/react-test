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
    setSelectedProducts([
      ...selectedProducts, 
      {...selectedProduct, purchased:true}
    ])
   }
   const removeProduct = (id) =>{    
    // brought the object
    const remaningProducts= selectedProducts.filter( product => product.id !== id)    
    // send the object to array selectedProducts spread operator
    setSelectedProducts( remaningProducts )
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
                <> 
                {/* add reduce to make total */}
                <h3>Total: ${selectedProducts.reduce((acc,curr)=>
                acc + curr.price, 0)}</h3>
                <ItemList productsArray={selectedProducts}
                removeProductHandler={removeProduct}/> 
                </>
              }
              
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
