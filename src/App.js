import './App.css';
import users from './assets/mock_users'
import UserCard from './Componets/UserCard' 



function App() {
  
  console.log(users)
  
  return (
    <div className="App">
      <div className="row row-cols-1 row-cols-md-4 g-4 ">
        { users.map( ( user,index ) => <UserCard cardData = {user}/>) }
      </div>
    </div>
  )
}

export default App;
