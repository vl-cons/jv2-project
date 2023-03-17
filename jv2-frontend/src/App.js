import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import AddPosts from './users/AddPosts';
import EditPosts from './users/EditPosts';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

function App() {
  return (
      <div className="App">
          <Router>
              <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/addpost" element={<AddPosts />}/>
                    <Route exact path="/editpost/:id" element={<EditPosts />}/>
                </Routes>
          </Router>


</div>
  )
}

export default App;
