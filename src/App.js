import React from 'react';
import { useState } from 'react';
import './App.css';
import products from './mocks/products';
import ItemList from './components/ItemList';

 
function App() { 
const [ allProducts, setAllProducts] = useState(products)

  // create state to add selected product in array
  const [ selectedProducts, setSelectedProducts ] = useState([])

  // category variable from DB products
   const categoriesList = products.reduce( (accum,current)=> {
    return !accum.includes(current.category) ? [...accum, current.category] :
    accum
   }, [])
   console.log(categoriesList)
   // opctions on select component
    const Categories = categoriesList.map( (category) => {
      return <option value={category}>{category}</option>
    })

  

    
  //  handler selected with id product from products  
   const addProduct = (id) =>{
    //console.log(id)
    // brought the object
    const selectedProduct = products.find( product => product.id === id)
    //console.log(selectedProduct)
    // send the object to array selectedProducts spread operator
    setSelectedProducts([
      ...selectedProducts,
      // add property purchased on product to virtual renderin opton button add|delete 
      {...selectedProduct, purchased:true}
    ])
   }
   const removeProduct = (id) =>{    
    // delete objet on list selectedProducts 
    const remaningProducts= selectedProducts.filter( product => product.id !== id)    
    // chance te list products on selectedProducts
    setSelectedProducts( remaningProducts )
   }

 const categoryHandler = event => {     
    console.log(event.target.value)
   
  }
  return (
    <div className="App">
      <div className="conteiner-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>Catálogo de productos</h1>
            <select className="form-select" aria-label="Default select example" onChange={categoryHandler}>
              <option selected >Selecciona una Categoría</option>
              {//opction on DB produts 
              Categories}
              
            </select>
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
