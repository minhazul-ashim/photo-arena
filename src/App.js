import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">

      <Navigation></Navigation>

      <Routes>

        <Route path='/*' element={<Navigate to={'/home'} />}>

        </Route>

        <Route path='/home' element={<Home></Home>}>

        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
