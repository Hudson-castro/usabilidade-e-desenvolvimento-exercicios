function selecioneMunicipio() {
    let estado = document.getElementById("estado").value;

    let municipioElement = document.getElementById("municipio");
    removeOptions(municipioElement);
    addOption(municipioElement, "-", "-");

    switch (estado) {
        case "bahia":
            addOption(municipioElement, "salvador", "Salvador");
            addOption(municipioElement, "feira_santana", "Feira de Santana");

            break;
        case "sao_paulo":
            addOption(municipioElement, "sao_paulo", "São Paulo");
            addOption(municipioElement, "adamantina", "Adamantina");
            break;
        case "rio_janeiro":
            addOption(municipioElement, "rio_janeiro", "Rio de Janeiro");
            addOption(municipioElement, "niteroi", "Niterói");
            break;
        case "tocantins":
            addOption(municipioElement, "palmas", "Palmas")
            addOption(municipioElement, "araguaina", "Araguaína");
            break;
        default:
            break;
    }
}
function removerOptions(selectElement) {
    for (let i = (selectElement.options.length - 1); i >= 0; 1 --) {
        selectElement.remove(i);
    }
}
function addOption(selectElement, value, text) {
    let option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);

}
function verificarObrigatorios() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;

    //Falsy value
    if (!nome || !cpf) {
        document.getElementById("btEnviar").disabled = true;

    } else {

        document.getElementById("btEnviar").disabled = false;

    }

}
function aoCarregar() {
    setInterval(verificarObrigatorios, 1000);
}
function dadosRecebido() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nome').value = urlParams.get('nome');
    document.getElementById('nomeMae').value = urlParams.get('nomeMae');
    document.getElementById('nomePai').value = urlParams.get('nomePai');
    document.getElementById('email').value = urlParams.get('email');
    document.getElementById('cpf').value = urlParams.get('cpf');
    document.getElementById('estadoCivil').value = urlParams.get('estadoCivil');
    document.getElementById('estado').value = urlParams.get("estado");
    document.getElementById('municipio').value = urlParams.get('municipio');


}