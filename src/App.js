import './App.css';
import React from 'react';
import {useState} from 'react'
import List from './Componets/List'
 
function App() { 
  // save list of koders
  const [koderList, setKoderList] = useState([])
  console.log(koderList)
  //save koder from form
  /*{
    name:'',
    email: '',
    generation: ''
  }*/
  const [koderData, setKoderData] = useState({})

  // handler with data form and put on state
  const inputHandler = event => {
    let property = event.target.name
    let value = event.target.value
    // save property in dataKoder
    setKoderData( { ...koderData, [property]:value } )
  }

  // save item(koderData) in koderList
  const saveKoder = event => {
    setKoderList( [ ...koderList, koderData] )
  }
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3">
            <form className='p-3'>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control"  placeholder="Juan Pérez" name="name" onChange={inputHandler}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email </label>
              <input type="email" className="form-control"  placeholder="name@example.com" name="email" onChange={inputHandler}/>
            </div>
            <div className="mb-3">
              <label className="form-label">generation</label>
              <input type="text" className="form-control"  placeholder="19g" name="generation" onChange={inputHandler}/>
            </div>
            <button type="button" className='btn btn-primary' onClick={saveKoder}>Guardar koder</button>
            </form>
          </div>
          <div className="col-12 col-md-9">
            {!koderList.length &&  <h2>Registra un koder en el formulario de la izquierda</h2>
            }
            <List koderList ={koderList}/>
          </div>
        </div>
      </div>  
    </div>
  )
}
export default App;
