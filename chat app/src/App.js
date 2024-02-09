// import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';

import { HashRouter as Router,Routes,Route } from 'react-router-dom';
   import Login from './components/Login.jsx';
  // import Chat from './components/Chat.jsx';

function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <Chat/> */}
      <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
