import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";

function RotaProtegida({ children }) {
  const { token } = useAuth();
  
  if (!token) {
    return <Navigate to="/login" replace />; 
  }
  
  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
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
