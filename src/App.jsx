import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from './components/pages/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import ListagemCliente from './components/pages/ListagemCliente/ListagemCliente';
import FormCliente from './components/pages/FormCliente/FormCliente'; // Certifique-se de importar
import ListagemUsuario from './components/pages/ListagemUsuarios/ListagemUsuarios';
import FormUsuario from './components/pages/ListagemUsuarios/FormUsuario'; // Certifique-se de importar
import SideBar from './components/pages/NavigationBar/SideBar';
import ProtectedRoute from './components/pages/Login/ProtectedRoute';

function AppContent() {
  const location = useLocation();
  const shouldShowSidebar = location.pathname !== "/"; // Sidebar não aparece na página de login

  return (
    <>
      {shouldShowSidebar && <SideBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ListagemCliente"
          element={
            <ProtectedRoute>
              <ListagemCliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/FormCliente/:id" // Rota com parâmetro para editar cliente
          element={
            <ProtectedRoute>
              <FormCliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/FormCliente" // Rota sem parâmetro para criar cliente
          element={
            <ProtectedRoute>
              <FormCliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ListagemUsuario"
          element={
            <ProtectedRoute>
              <ListagemUsuario />
            </ProtectedRoute>
          }
        />
        <Route
          path="/FormUsuario/:key" // Rota com parâmetro para editar usuário
          element={
            <ProtectedRoute>
              <FormUsuario />
            </ProtectedRoute>
          }
        />
        <Route
          path="/FormUsuario" // Rota sem parâmetro para criar usuário
          element={
            <ProtectedRoute>
              <FormUsuario />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
