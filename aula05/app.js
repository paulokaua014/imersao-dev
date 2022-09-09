function adicionaranime() {
    var campoAnimes = document.getElementById("animes").value;
    if (campoAnimes.endsWith(".jpg")){
       listaAnimesnaTela(campoAnimes);
    }else{
        console.error("VC DIGITOU ERRADO O ENDEREÇO ERRADO");
    }
    document.getElementById("animes").value ="";
}
function listaAnimesnaTela(animes){
    console.log(animes);
    var elementoAnimeFavorito = "<img src=" + animes + ">"
    var elementoListaanime = document.getElementById("listaAnimes");
    elementoListaanime.innerHTML = 
        elementoListaanime.innerHTML + elementoAnimeFavorito;
}