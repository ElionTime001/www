/*import './App.css';
import axios from "axios";
import {useEffect, useState } from "react";

function App() {

  const [FlowerList, setFlowerList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3210/flowers").then((response)=> {
      setFlowerList(response.data);
    })
  }, [])
  return (
      <div className="App">
    {FlowerList.map((value, key) => {
      return (<div className="flower">
        <div className="name">{value.name}</div>
        <div className="meaning">{value.meaning}</div>
      </div>);
    })}
  </div>
  );
}

export default App;*/

import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Meanings from "./pages/Meanings";
import Flower from "./pages/Flower";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App() {

  return (
      <div className="App">

        <Router>
            <div className="navbar">
            <Link to="/">HOME</Link>
            <Link to="/meanings">FLOWER MEANINGS</Link>
            </div>
          <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/meanings" element={<Meanings/>} exact />
              <Route path="/meanings/:id" element={<Flower/>} exact/>
              <Route path="/meanings/:id/edit" element={<Edit/>} exact/>
          </Routes>
        </Router>

      </div>
  );
}

export default App;
