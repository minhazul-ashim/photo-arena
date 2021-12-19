import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from './components/Navigation/Navigation';
import PaymentPage from './components/Payment/Payment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import CollectionPage from './components/CollectionPage/CollectionPage'
import UserProfile from './components/UserProfile/UserProfile'

function App() {
  return (
    <div className="App">

      <Navigation></Navigation>

      <Routes>

        <Route path='/*' element={<Navigate to={'/home'} />}>

        </Route>

        <Route path='/home' element={<Home></Home>}>

        </Route>

        <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>

          <Route path='/dashboard/payment' element={<PaymentPage></PaymentPage>}>

          </Route>

          <Route path='/dashboard/profile' element={<UserProfile></UserProfile>}>

          </Route>

          <Route path='/dashboard/collections' element={<CollectionPage></CollectionPage>}>

          </Route>

        </Route>

        <Route path='/login' element={<Login></Login>}>

        </Route>

        <Route path='/register' element={<Register></Register>}>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
