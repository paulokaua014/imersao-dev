var cartas1 = {
    nome:"Charizard",
    atributos:{
        ataque: 9,
        defesa: 7,
        magia: 9
    } 
};
var cartas2 = {
    nome:"Blastoid",
    atributos:{
        ataque: 6,
        defesa: 3,
        magia: 6
    } 
};
var cartas3 = {
    nome:"Mewtwo",
    atributos:{
        ataque: 10,
        defesa: 10,
        magia: 10
    } 
}

var cartas =[cartas1, cartas2, cartas3];
var cartasmaquina;
var cartasjogadores;

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartasmaquina = cartas[numeroCartaMaquina];

  
    var numeroCartajogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartajogador){
        var numeroCartajogador = parseInt(Math.random() * 3);
    }
    cartasjogadores = cartas[numeroCartajogador];
    console.log(cartasjogadores);


    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes()


    function exibirOpcoes() {
        var opcoes = document.getElementById("opcoes");
        var opcoesTexto = ""

        for (var atributo in cartasjogadores.atributos){
            opcoesTexto += "<input type='radio' name ='atributo' value='" + atributo
            + "'>" + atributo;
        }
        opcoes.innerHTML = opcoesTexto;
    }
}
function obterAtributosSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
    for(var i =0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
        return radioAtributos[i].value
        }
    }
}

function jogar(){
    var atributosSelecionado = obterAtributosSelecionado();
    var elementoresultado = document.getElementById("resultado")
    var valorcartajogador = cartasjogadores.atributos[atributosSelecionado]
    var valorcartamaquia = cartasmaquina.atributos[atributosSelecionado]

    if(valorcartajogador > valorcartamaquia){
        elementoresultado.innerHTML = "VC VENCEU PARABENS"
    } else if (valorcartamaquia > valorcartajogador){
        elementoresultado.innerHTML = "VC PERDEU MARRECO"
    } else{
        elementoresultado.innerHTML ="EMPATOU MARRECO TENTE DENOVO"
        
    }
    console.log(cartasmaquina)
}