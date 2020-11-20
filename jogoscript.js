// 1 criar balao
//2 estourar
//3 carregar o jogo
// Math.randon cria numeros aleatorios
//Math.floor para numero inteiros ex:Math.floor(Math.random()*5);
// document.createElement cria um documento para tratar o elemento
//setAttribute atribui o que criamos no html
//setInterval carregar de certo em certo tempo a função que for chamada

var total = 0;

function criarbalao(){

var balao = document.createElement("div");
balao.setAttribute("class","balao");

var x= Math.floor(Math.random()*600);
var y= Math.floor(Math.random()*400);

balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
balao.setAttribute("onclick", "estourar(this)");

document.body.appendChild(balao);

}

function estourar(objeto){
    document.body.removeChild(objeto);

    total++;
    var score =  document.getElementById('total');
    score.innerHTML = "Baloes estourados: " + total; 

}

function carregarJogo(){
    setInterval(criarbalao, 1000);

}