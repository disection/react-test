import './App.css';
import users from './assets/mock_users'
import List from './Componets/List'
 



function App() {
  
 
  
  return (
    <div className="App">
      <List data={users} />
    </div>
  )
}

export default App;
