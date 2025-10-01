var cafe=[], c, almoco=[], a, jantar=[], j



cafe[0]=(prompt("O que quer para o café da manhã?"))

    while(cafe[0]==""){
    alert("Você tem que escolher ao menos dois elementos do nosso cardápio")
    cafe[0]=(prompt("O que quer para o café da manhã?"))
}

do{
    c=prompt("O que mais? ")

    if(c==""){
    alert("Digite algo, se quer terminar o pedido aperte em 'cancelar'")}

    else{
    cafe.push(c)}
}

while(c!=null)




almoco[0]=(prompt("O que quer para o almoço?"))

    while(almoco[0]==""){
    alert("Você tem que escolher ao menos dois elementos do nosso cardápio")
    almoco[0]=(prompt("O que quer para o almoço?"))
}


do{
    a=prompt("O que mais? ")

    if(a==""){
    alert("Digite algo, se quer terminar o pedido aperte em 'cancelar'")}

    else{
    almoco.push(a)}

}
while(a!=null)





jantar[0]=(prompt("O que quer para o jantar?"))

    while(jantar[0]==""){
    alert("Você tem que escolher ao menos dois elementos do nosso cardápio")
    jantar[0]=(prompt("O que quer para o jantar?"))
}


do{
    j=prompt("O que mais? ")

    if(j==""){
    alert("Digite algo, se quer terminar o pedido aperte em 'cancelar'")}

    else{
    jantar.push(j)}

}
while(j!=null)








    document.write("<h1>CARDÁPIO</h1>")

    document.write("<h2>Seu café da manhã</h2>")
for(var i=0; i<cafe.length-1; i++){
    document.write("<ul><li>"+cafe[i]+"</li></ul>")
}


    document.write("<h2>Seu almoço</h2>")
for(var i=0; i<almoco.length-1; i++){
    document.write("<ul><li>"+almoco[i]+"</li></ul>")
}


    document.write("<h2>Seu jantar</h2>")
for(var i=0; i<jantar.length-1; i++){
    document.write("<ul><li>"+jantar[i]+"</li></ul>")
}


