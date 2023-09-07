
// Adicione um evento onchange ao seletor personalizado para atualizar a cor de fundo
const selectCorFundo = document.querySelector('.color-picker');

selectCorFundo.addEventListener("change", function () {
    const corSelecionada = selectCorFundo.value;
    selectCorFundo.style.backgroundColor = corSelecionada;
});

//adiciona um ouvinte de evento CHANGE ao seletor personalizado.
//Quando o evento CHANGE é acionado, a cor selecionada é obtida usando "selectCorFundo.value", e a cor de fundo do próprio seletor personalizado é atualizada com a cor selecionada usando "selectCorFundo.style.backgroundColor". Isso cria o efeito de mudança de cor na própria caixa de seleção quando uma cor é selecionada.


require.config({
    paths: {
        'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.23.0/min/vs'
    }
});

require(['vs/editor/editor.main'], function () {
    monaco.editor.defineTheme('dark', {
        base: 'vs-dark',  // Use o tema vs-dark como base
        inherit: true,    // Herda configurações do tema base
        rules: [
            { token: '', foreground: 'FFFFFF', background: '000000' }  // Personalize as cores de texto e fundo aqui
        ]});

        var editor = monaco.editor.create(document.getElementById('editorContainer'), {
            theme: 'vs-dark',  // Definindo o tema para 'vs-dark' (tema escuro padrão)
            value: [
                '//escreva seu codigo '
            ].join('\n'),  // Definindo o código inicial no editor
            language: 'javascript',  // Definindo a linguagem para JavaScript
            lineNumbers: false  // Desativando os números de linha para remover os números de linha
        });
    });


