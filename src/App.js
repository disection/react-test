import './App.css';
import { useState } from 'react'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';

import Title from './Componets/Title'
 
function App() {
  //let userData = {}
  const [title, setTitle] = useState('Hola Koders!')
  const [isLogged, setIsLogged] = useState(false)
  // title = 'hola koders'
  /* const setTitle = (valor) => {
    title = valor
  */
  const inputHandler = event =>{
    setTitle(event.target.value)
  }
  const logingHandler = event => {
    setIsLogged(true)
  }

  const logutHandler =event =>{
    setIsLogged(false)
  }

  const saveHandler = event =>{
    event.preventDefault()
    alert('guardando datos')
  }
  const [bgColor, setBgcolor] = useState( 'bg-success' )
  const greenLigthHandler = event => {
    setBgcolor('bg-success')
  }

  const yellowLigthHandler = event => {
    setBgcolor('bg-warning')
  }

  const redLigthHandler = event => {
    setBgcolor('bg-danger')
  }
  
  return (
    <div className="App">
        <div className=" w-50 p-3 m-auto justify-content-between ">
          <Button type="button" className="btn btn-success " onClick={greenLigthHandler}>
            green
          </Button>
          <Button type="button" className="btn btn-warning m-3" onClick={yellowLigthHandler}>
            yellow
          </Button>
          <Button type="button" className="btn btn-danger" onClick={redLigthHandler}>
            red
          </Button>          
        </div>
        <div className={`ligth bg-red m-auto p-3 ${bgColor}`}></div>

        <div className="w-50 p-3 m-auto">
          <Title text={title}/>
          <Form>
            <input type="text" onChange={inputHandler}/>
            
            <FormGroup>
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                onChange={inputHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
            <Button type="button" onClick={saveHandler}>
              Guardar
            </Button>
          </Form>
        </div>  

        <div className="w-50 p-3 m-auto">
          { !isLogged && <Button type="button" className="btn btn-success" onClick={logingHandler}>
            login
          </Button>}
          { isLogged &&<Button type="button" className="btn btn-warning" onClick={logutHandler}>
            Sign
          </Button>} 
        </div>   
    </div>
  )
}

export default App;
