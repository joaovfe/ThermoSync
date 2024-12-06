// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/pages/Login/Login'; 
import './App.css';
import NavigationBar from './components/pages/NavigationBar/NavigationBar';
import Dashboard from './components/pages/Dashboard/Dashboard';
import ListagemCliente from './components/pages/ListagemCliente/ListagemCliente';
import FormCliente from './components/pages/FormCliente/FormCliente';


import ProtectedRoute from './components/pages/Login/ProtectedRoute';
function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Dashboard' element = {
          <ProtectedRoute>
          <Dashboard/>
          </ProtectedRoute>
          }></Route>
        <Route path='/ListagemCliente' element = {
          <ProtectedRoute>
          <ListagemCliente/>
          </ProtectedRoute>
          }></Route>
        <Route path='/FormCliente/:id' element = {
          <ProtectedRoute>
          <FormCliente/>
          </ProtectedRoute>
          }></Route>
        <Route path='/FormCliente' element = {
          <ProtectedRoute>
          <FormCliente/>
          </ProtectedRoute>
          }></Route>
        <Route
          path="/NavigationBar"
          element={
            <ProtectedRoute>
              <NavigationBar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
