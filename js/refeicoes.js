var cafe=[], c

cafe[0]=alert(prompt("O que quer para o café da manhã? "))

if(cafe[0]==null){
    alert=("Você tem que escolher ao menos um elemento do nosso cardápio")
}

do{
    c=alert(prompt("O que mais? "))
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
