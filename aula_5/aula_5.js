function clicou(){
    document.getElementById("agradecimentos").innerHTML="<b>Obrigado por clicar</b>";
    window.location.href("https://developer.mozilla.org/en-US/");
}

function redirecionar(){
    window.open("https://developer.mozilla.org/en-US/");

}

function detector(){
    document.getElementById("detect").innerHTML="<b>Obrigado por passar o mouse</b>";
}

function voltar(){
    document.getElementById("detect").innerHTML="<b>Passe o mouse aqui </b>";
}

function encontrar(element){
    element.innerHTML="<b>Obrigado por passar o mouse</b>";
}

function retornar(element){
    element.innerHTML="<b>Passe o mouse aqui</b>";
}

function pokemon(element){
    if (element.value=="squirtle"){
        document.getElementById("char").innerHTML="Parabéns por escolher um squirtle, ele é do tipo água e começa com bons status defensivos sendo excelente para a batalha no primeiro ginásio";       
    }
    else if (element.value=="Bulbasaur"){
        document.getElementById("char").innerHTML="Parabéns por escolher um Bulbasaur, ele é do tipo grama/veneno e começa com status balanceados sendo bem efetivo no primeiro e excelente no segundo ginásio";       
    }
    else{
        document.getElementById("char").innerHTML="Parabéns por escolher um Charmander, ele é do tipo fogo e começa com bons status ofensivos tendo desvantagem nos dois primeiros ginásios";       
    }
}
