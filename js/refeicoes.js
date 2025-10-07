var cafe = [], c, almoco = [], a, jantar = [], j;

// Café da manhã: exige ao menos 2 itens
while (cafe.length < 2) {
    let item = prompt(cafe.length === 0 ? "O que quer para o café da manhã?" : "Digite mais um item para o café da manhã:");
    if (item === null || item.trim() === "") {
        alert("Digite ao menos dois itens para o café da manhã.");
    } else {
        cafe.push(item);
    }
}
do {
    c = prompt("O que mais para o café da manhã? (aperte cancelar para terminar)");
    if (c === null) break;
    if (c.trim() === "") {
        alert("Digite algo, se quer terminar o pedido aperte em 'cancelar'");
    } else {
        cafe.push(c);
    }
} while (true);

// Almoço: exige ao menos 2 itens
while (almoco.length < 2) {
    let item = prompt(almoco.length === 0 ? "O que quer para o almoço?" : "Digite mais um item para o almoço:");
    if (item === null || item.trim() === "") {
        alert("Digite ao menos dois itens para o almoço.");
    } else {
        almoco.push(item);
    }
}
do {
    a = prompt("O que mais para o almoço? (aperte cancelar para terminar)");
    if (a === null) break;
    if (a.trim() === "") {
        alert("Digite algo, se quer terminar o pedido aperte em 'cancelar'");
    } else {
        almoco.push(a);
    }
} while (true);

// Jantar: exige ao menos 2 itens
while (jantar.length < 2) {
    let item = prompt(jantar.length === 0 ? "O que quer para o jantar?" : "Digite mais um item para o jantar:");
    if (item === null || item.trim() === "") {
        alert("Digite ao menos dois itens para o jantar.");
    } else {
        jantar.push(item);
    }
}
do {
    j = prompt("O que mais para o jantar? (aperte cancelar para terminar)");
    if (j === null) break;
    if (j.trim() === "") {
        alert("Digite algo, se quer terminar o pedido aperte em 'cancelar'");
    } else {
        jantar.push(j);
    }
} while (true);

// Exibe o cardápio
document.write("<h1>CARDÁPIO</h1>");

document.write("<h2>Seu café da manhã</h2>");
for (var i = 0; i < cafe.length; i++) {
    document.write("<ul><li>" + cafe[i] + "</li></ul>");
}

document.write("<h2>Seu almoço</h2>");
for (var i = 0; i < almoco.length; i++) {
    document.write("<ul><li>" + almoco[i] + "</li></ul>");
}

document.write("<h2>Seu jantar</h2>");
for (var i = 0; i < jantar.length; i++) {
    document.write("<ul><li>" + jantar[i] + "</li></ul>");
}


