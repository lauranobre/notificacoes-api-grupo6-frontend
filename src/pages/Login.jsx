// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setErro(null);
        try {
            // TRUQUE DE TESTE ATIVO: Permite logar com qualquer senha digitada!
            const tokenFicticio = "token_de_teste_123456";
            login(tokenFicticio);
            navigate("/");
        } catch (e) {
            setErro(e.message);
        }
    }

    return (
  // CORREÇÃO: Trocado de <div> para <main> para dar o marco principal da página
  <main className="max-w-sm mx-auto p-6 mt-10 border border-gray-200 rounded-xl shadow-sm bg-white">
    <h1 className="text-xl font-bold mb-4 text-center text-gray-800">Acessar Sistema</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      
      <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
        E-mail
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seuemail@exemplo.com"
          autoComplete="email"
          className="border border-gray-300 rounded-lg px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          required
        />
      </label>

      <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
        Senha
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          autoComplete="current-password"
          className="border border-gray-300 rounded-lg px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          required
        />
      </label>

      {erro && (
        <p role="alert" className="text-red-600 text-sm bg-red-50 p-2 rounded-lg border border-red-100 font-medium text-center">
          ⚠️ {erro}
        </p>
      )}
      
      <button className="bg-blue-600 text-white rounded-lg px-4 py-2.5 font-semibold hover:bg-blue-700 transition-colors min-h-[44px] cursor-pointer">
        Entrar
      </button>
    </form>
  </main>
);
}

export default Login;