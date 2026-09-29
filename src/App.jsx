import { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import NotificationList from "./components/NotificationList";
import NovaNotificacaoForm from "./components/NovaNotificacaoForm";

// Pegando a URL configurada no seu arquivo .env.local
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [filtro, setFiltro] = useState("todas");
  const [notificacoes, setNotificacoes] = useState([]); // Começa vazio (Passo 3)
  const [carregando, setCarregando] = useState(true);   // Estado carregando (Passo 3)
  const [erro, setErro] = useState(null);               // Estado erro (Passo 3)

  // useEffect para buscar os dados reais (Passo 3)
  useEffect(() => {
    async function buscar() {
      try {
        setCarregando(true);
        setErro(null);

        const resposta = await fetch(`${API_URL}/notificacoes`);

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar as notificações da API.");
        }

        const dados = await resposta.json();
        
        if (Array.isArray(dados)) {
          setNotificacoes(dados);
        } else {
          setNotificacoes([]);
        }
      } catch (err) {
        // Mensagem de erro amigável que vai aparecer no Passo 5
        setErro("Não foi possível conectar ao servidor da API. Verifique a porta de conexão.");
        setNotificacoes([]); 
      } finally {
        setCarregando(false);
      }
    }

    buscar();
  }, []);

  // Filtro que age sobre os dados vindos da API
  const notificacoesVisiveis = notificacoes.filter((n) => {
    if (!n) return false;
    if (filtro === "todas") return true;
    if (filtro === "push") return n.canal === "PUSH";
    if (filtro === "email") return n.canal === "EMAIL";
    return true;
  });

  function adicionarNotificacao(nova) {
    setNotificacoes((atual) => [nova, ...atual]);
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Central de Notificações</h1>

      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />
      <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />

      {/* Passo 4: Blocos condicionais tratando os três estados */}
      {carregando && (
        <p className="text-center text-gray-500 my-4">
          Carregando notificações...
        </p>
      )}

      {erro && (
        <p className="text-center text-red-500 bg-red-50 p-3 rounded-lg border border-red-200 my-4">
          ⚠️ {erro}
        </p>
      )}

      {!carregando && !erro && (
        <NotificationList notificacoes={notificacoesVisiveis} />
      )}
    </div>
  );
}

export default App;
