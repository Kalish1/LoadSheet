function LoadSheet(sheet) {
    return fetch(sheet)
        .then(response => response.text())
        .then(html => {
        let nome, data = new Array(), planilha = new DOMParser().parseFromString(html, "text/html");
        planilha.querySelectorAll(".waffle > tbody").forEach((tbody,tabela) => {
            nome = planilha.querySelector("#sheet-menu") ? planilha.querySelectorAll("#sheet-menu > li > a")[tabela].innerHTML : planilha.querySelector("#doc-title > span").innerHTML.split(": ")[1];
            data[nome] = new Array();
            tbody.querySelectorAll("tr").forEach((tr,linha) => {
                data[nome].push([]);
                tr.querySelectorAll("td").forEach(td => {
                    if(td.innerHTML) data[nome][linha].push(td.innerHTML);
                    else data[nome][linha].push("");
                });
            });
        });
        return data;
    });
}

LoadSheet("--YOUR PUBLIC WEB SHEET LINK HERE--").then(sheet => {
    console.log(sheet);
});
