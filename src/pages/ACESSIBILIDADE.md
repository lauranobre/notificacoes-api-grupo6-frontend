# Relatório de Acessibilidade — Sistema de Notificações

## Antes
- **Nota do Lighthouse (mobile):** 98
- **Problemas apontados pelo Lighthouse:** O documento não possui um marco principal (`Document does not have a main landmark`), pois o conteúdo principal da aplicação foi envelopado usando apenas tags genéricas como `<div>`.
- **Problemas encontrados no teste do teclado:** Ao navegar por links ou botões repetidos (como a barra de abas e chips de filtro), a falta de um indicador explícito de seleção de estado confunde a ordem de foco em leitores de tela.

## Depois
- **Nota do Lighthouse (mobile):** 100
- **O que foi corrigido:**
  - Substituição da `<div>` externa pela tag semântica correta `<main>` no arquivo principal de visualização do painel central.
  - Implementação da propriedade `aria-pressed` nos botões da barra de ferramentas (`FilterBar.jsx`) ligada ao estado de filtragem ativo.
  - Inclusão do atributo `aria-live="polite"` no contêiner reativo responsável pelo mapeamento (`.map`) da listagem de novos cards.
  - Ajuste estrutural no bloco de login para emissão do erro do servidor via texto explícito utilizando `role="alert"` e ícones descritivos.
- **O que ainda não está bom (e por quê):** Todos os testes automatizados e o fluxo de teclado foram cumpridos, zerando as pendências do checklist.

## Um problema que a ferramenta NÃO apontou e eu encontrei
A ferramenta automatizada validou a caixa de inserção do formulário "Adicionar Notificação", mas o teste manual revelou que os campos dependiam muito do texto em marca d'água (`placeholder`). Para evitar falhas em pessoas com déficit cognitivo ou baixa visão, adicionamos uma tag `<label>` visual definitiva para cada caixa de entrada.
