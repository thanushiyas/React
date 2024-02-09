import logo from './logo.svg';
import './App.css';
 import Home from './components/Home';
 import Login from './components/Login';
// import Router from './components/Router';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
       {/* <Home/>  */}
      {/* <Login/> */}
      {/* <Router/> */}
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
