// src/components/FilterBar.jsx
export default function FilterBar({ filtroAtual, onFiltroChange }) {
  const botoesFiltro = [
    { id: 'todas', texto: 'Todas' },
    { id: 'push', texto: 'Push' },
    { id: 'email', texto: 'E-mail' }
  ];

  return (
    <div className="flex gap-2 my-4" role="group" aria-label="Filtros de canais de notificação">
      {botoesFiltro.map((botao) => {
        const estaAtivo = filtroAtual === botao.id;
        return (
          <button
            key={botao.id}
            type="button"
            // PONTO CRÍTICO EXIGIDO: aria-pressed sinalizando o estado ativo para o leitor de telas
            aria-pressed={estaAtivo}
            onClick={() => onFiltroChange(botao.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors min-h-[44px] cursor-pointer ${
              estaAtivo 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {botao.texto}
          </button>
        );
      })}
    </div>
  );
}