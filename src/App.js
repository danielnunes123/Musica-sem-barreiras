import {  BrowserRouter as Router, Route,Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/pages/Home";
import Sidebar from "./Components/layout/Sidebar";
import Menubar from "./Components/layout/Menubar";

function App() {
  return (
<Router>
  <div id="body">
  <Menubar/>
  <Sidebar/>

  <Routes>
    <Route exact path="/" element={<Home/>}/>
  </Routes>
  </div>
</Router>
  );
}

export default App;
