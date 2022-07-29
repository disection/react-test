import React from 'react';
import './App.css';
import products from './mocks/products';

 
function App() { 
  
  
  return (
    <div className="App">
      <div className="conteiner-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>Catálogo de productos</h1>
            <div className="row row-cols-1 row-cols-md-3 gap-3">
              {products.map( (product) => {
                const {id,title,price,description,rating, image}= product
                return (
                  <div className="col" key={id}>
                    <div className="card h-100">
                      <img src={image} className='w-100' alt="" />
                      <h2 className="card-body">{title}</h2>
                      <p className="card-text">{description.substring(0,40)}</p>
                      <p className="card-text">{rating.rate}</p>
                      <p className="card-text">{price}</p>
                      <button type="button" className="btn btn-primary">Agregar al carrito</button>
                    </div>
                  </div>
                )
              })}
              
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h1>Carrito de compras</h1>
            <div className="row row-cols-1 row-cols-md-4">
              <div className="card">
                <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" className='w-100' alt="" />
                <h2 className="card-body">Nombre Producto</h2>
                <p className="card-text">Descripción</p>
                <p className="card-text">Ranking</p>
                <p className="card-text">Precio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
