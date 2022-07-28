import './App.css';
import React from 'react';
import {useState} from 'react'
 
function App() { 
  const [koderList, setKoderList] = useState([])
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <form className='p-3'>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control"  placeholder="Juan Pérez" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email </label>
              <input type="email" className="form-control"  placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">generation</label>
              <input type="text" className="form-control"  placeholder="19g" />
            </div>
            <button className='btn btn-primary'>Guardar koder</button>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">      
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">email</p>
                    <p className="card-text">generation</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
export default App;
