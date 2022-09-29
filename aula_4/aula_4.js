function validaIdade(idade){
    var validar;

    if(idade<18){
        validar=false
    }
    else{
        validar=true;
    }
    return validar;
}
    var idade = prompt("Qual a sua idade?");
    console.log(validaIdade(idade));

    

