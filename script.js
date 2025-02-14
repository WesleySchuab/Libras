function traduzirParaLibras() {
    const textInput = document.getElementById('textInput').value;
    if (textInput.trim() === "") {
        alert("Por favor, digite uma frase.");
        return;
    }

    // Atualiza o conteúdo da div monitorada pelo VLibras
    const vlibrasTextDiv = document.getElementById('vlibras-text');
    vlibrasTextDiv.setAttribute('data-text', textInput);

    // Força a atualização do VLibras
    if (window.VLibras && window.VLibras.Widget) {
        window.VLibras.Widget.update();
    } else {
        alert("VLibras não foi carregado corretamente.");
    }
}