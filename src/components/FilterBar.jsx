import FilterChip from "./FilterChip";

export default function FilterBar({ filtroAtual, onFiltroChange }) {
  const botoesFiltro = [
    { id: 'todas', texto: 'Todas' },
    { id: 'nao_lidas', texto: 'Não lidas' },
    { id: 'push', texto: 'Push' },
    { id: 'email', texto: 'E-mail' }
  ];

  return (
    <div 
      role="group" 
      aria-label="Filtros de notificações" 
      className="flex gap-2 my-4 flex-wrap"
    >
      {botoesFiltro.map((botao) => (
        <FilterChip
          key={botao.id}
          label={botao.texto}
          ativo={filtroAtual === botao.id}
          onClick={() => onFiltroChange(botao.id)}
        />
      ))}
    </div>
  );
}