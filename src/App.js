import './App.css';
//import users from './assets/mock_users'
import products from './assets/mock_products'
import List from './Componets/List'
 
function App() {
  return (
    <div className="App">  
      {/* <List data={users} />       */}
      <List data={products} />
    </div>
  )
}

export default App;
