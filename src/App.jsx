// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/pages/Login/Login'; 
import './App.css';
import NavigationBar from './components/pages/NavigationBar/NavigationBar';
import Dashboard from './components/pages/Dashboard/Dashboard';
import ListagemCliente from './components/pages/ListagemCliente/ListagemCliente';
import FormCliente from './components/pages/FormCliente/FormCliente';
import ListagemUsuario from './components/pages/ListagemUsuarios/ListagemUsuarios'; 
import FormUsuario from './components/pages/ListagemUsuarios/FormUsuario'; 

import ProtectedRoute from './components/pages/Login/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/ListagemCliente' element={
          <ProtectedRoute>
            <ListagemCliente />
          </ProtectedRoute>
        } />
        <Route path='/FormCliente/:id' element={
          <ProtectedRoute>
            <FormCliente />
          </ProtectedRoute>
        } />
        <Route path='/FormCliente' element={
          <ProtectedRoute>
            <FormCliente />
          </ProtectedRoute>
        } />
        <Route path='/ListagemUsuario' element={
          <ProtectedRoute>
            <ListagemUsuario />
          </ProtectedRoute>
        } />
        <Route path='/FormUsuario/:id' element={
          <ProtectedRoute>
            <FormUsuario />
          </ProtectedRoute>
        } />
        <Route path='/FormUsuario' element={
          <ProtectedRoute>
            <FormUsuario />
          </ProtectedRoute>
        } />
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
