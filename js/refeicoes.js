var cafe=[], c

cafe[0]=alert(prompt("O que quer para o café da manhã?"))

    if(cafe[0]==""){
    alert("Você tem que escolher ao menos um elemento do nosso cardápio")
    cafe[0]=alert(prompt("O que quer para o café da manhã?"))
}


do{
    c=prompt("O que mais? ")

    if(c==""){
    alert("Digite algo, se quer terminar o pedido aperte em 'cancelar'")}

    else{
    cafe.push(c)}
}
while(c!=null)

for(var i=0; i<cafe.length-1; i++){
    document.write("<h2>"+cafe[i]+"</h2>")


}



