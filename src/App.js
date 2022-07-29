import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Posts from './Page/Post'
import NewPost from './Page/NewPost'

function App() {
  return (
    <div className="App">

      <nav className="d-flex justify-content-center py-3 gap-3">        
          <Link to="/posts" className="nav-link">Publicaciones</Link>
          <Link to="/newPost" className="nav-link">Nuevas publicaciones</Link>        
      </nav>

      <main className='container'>
        <div className="row">
          <aside className="col-3">hola</aside>
          <div className="col-6">
            <Routes>
              <Route path="/" element={<h1>hola</h1>} />
              <Route path="posts" element={<Posts />} />
              <Route path="newPost" element={<NewPost />} />
            </Routes>
          </div>
          <aside className="col-3">hola</aside>
        </div>        
      </main>
    </div>
  );
}

export default App;
