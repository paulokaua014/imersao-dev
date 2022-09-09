var numSecreto = parseInt(Math.random() * 11);
function Chutar(){
    var resultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if(chute == numSecreto) {
        resultado.innerHTML = "ACERTOU MARRECO"
    }
    else if(chute > 10 || chute < 0) {
        resultado.innerHTML = "VC E CEGO MARRECO PELO AMOR DE DEUS"
    }
    else{
            resultado.innerHTML = "ERROU MARRECO"
        }
  
}