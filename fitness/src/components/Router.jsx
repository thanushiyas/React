// import {BrowserRouter,Routes,Route} from 'react-router-dom';

// import Login from './Login';
// import Home from './Home';
// // import Signup from './Signup';



// export default function Router() {
//     return (
//       <BrowserRouter>
//          <Routes>
//             <Route path="/" element={<Login/>}>Login</Route>
//             {/* <Route path='signup' element={<Signup/>}>Signup</Route> */}
//             <Route path = "Home" element = {<Home/>}>Home</Route>
            
            
//         </Routes> 
//       </BrowserRouter>
//     )
// }

// Rename your Router component to avoid naming conflict
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Home from './Home';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}
