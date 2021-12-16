import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
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

        <Route path='/dashboard' element={<Dashboard></Dashboard>}>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
