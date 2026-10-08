import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useAuth } from "./context/AuthContext";

// Componente para Proteger as Rotas
function RotaProtegida({ children }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

// Componente Principal
function App() {
  return (
    <Routes>
      {/* Rota Pública */}
      <Route path="/login" element={<Login />} />

      {/* Rota Protegida */}
      <Route 
        path="/" 
        element={
          <RotaProtegida>
            <Home />
          </RotaProtegida>
        } 
      />
    </Routes>
  );
}

export default App;
