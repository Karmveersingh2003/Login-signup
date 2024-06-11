import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'; 
import Signup from './components/Signup/Signup';
function App() {
  return (
  <>
   <Router>
      <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </Router>
  </>
  );
}

export default App;
