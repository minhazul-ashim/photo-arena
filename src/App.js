import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
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
    </div>
  );
}

export default App;
