import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import "./App.css"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </>
  );
}

export default App;
