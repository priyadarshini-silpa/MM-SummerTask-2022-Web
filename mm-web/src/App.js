import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Article from "./pages/Article";
import Admin from "./pages/Admin";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App(){
  return <div className="App">
    <Router>
      <Navbar/>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/article' element={<Article />} />
        <Route exact path='/admin' element={<Admin />} />
        </Routes>
      <Footer/>
    </Router>
  </div>;
}
export default App;