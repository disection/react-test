import logo from './logo.svg';
import './App.css';
import Button from '././Componets/button'

function App() {
  const buttons = [
    {
      text: 'Botón 1',
      color: 'primary'
    },
    {
      text: 'Botón 2',
      color: 'secondary'
    },
    {
      text: 'Botón 3',
      color: 'success'
    },
    {
      text: 'Botón 4',
      color: 'danger'
    },
    {
      text: 'Botón 5',
      color: 'warning'
    }
  ]
  return (
    <div className="App">
      <div className='d-flex justify-content-between w-50 mt-3 mx-auto'>
        {buttons
          .filter(button => button.color !== 'primary')
          .map((button, index) => {
            return <Button text={button.text} color={button.color} />
          })}
      </div>
    </div>
  );
}

export default App;
