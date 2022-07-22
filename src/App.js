import './App.css';
import ShapeDiv from './Componets/Shape';
import finalShapes from './assets/shapes'
 
function App() {
  return (
    <div className="App">  
       { finalShapes.map( shape => (
         <ShapeDiv shape={shape.shape} color={shape.color}/> 
        ) )
      }
    </div>
  )
}

export default App;
