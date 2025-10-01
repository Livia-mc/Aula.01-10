var cafe=[], c

do{
    c=alert(prompt("O que quer para o café da manhã?"))
    cafe.push(c)
    if(c==""){
    alert("Digite algo")
    }
}
while(c!=null) {

for(var i=0; i<cafe.length-1; i++){
    document.write("<h2>"+cafe[i]+"</h2>")
    }
}