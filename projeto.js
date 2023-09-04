
  // Obtém referências para o select e o elemento a ser personalizado
  const selectCorFundo = document.getElementById('personalizacao-corfundo');
  const elementoPersonalizado = document.getElementById('personalizacao');

  // Adiciona um ouvinte de evento para o evento 'change' no select
  selectCorFundo.addEventListener('change', function () {
    // Obtém o valor selecionado (cor de fundo) do select
    const corFundoSelecionada = selectCorFundo.options[selectCorFundo.selectedIndex].value;

    // Aplica a cor de fundo selecionada ao elemento a ser personalizado
    elementoPersonalizado.style.backgroundColor = corFundoSelecionada;
  });



