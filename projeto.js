
// Adicione um evento onchange ao seletor personalizado para atualizar a cor de fundo
const selectCorFundo = document.querySelector('.color-picker');

selectCorFundo.addEventListener("change", function () {
    const corSelecionada = selectCorFundo.value;
    selectCorFundo.style.backgroundColor = corSelecionada;
});

//adiciona um ouvinte de evento CHANGE ao seletor personalizado.
//Quando o evento CHANGE é acionado, a cor selecionada é obtida usando "selectCorFundo.value", e a cor de fundo do próprio seletor personalizado é atualizada com a cor selecionada usando "selectCorFundo.style.backgroundColor". Isso cria o efeito de mudança de cor na própria caixa de seleção quando uma cor é selecionada.
