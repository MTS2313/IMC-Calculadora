var call_coform = document.getElementById("submit-form");
var imc;

call_coform.addEventListener("click",()=>{
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var altura_conv = altura/100;
    imc =  peso / (altura_conv * altura_conv)
    if(peso == 0 || altura == 0){
        document.getElementById("imc-result").innerHTML = "Favor completar todos os campos"
    }else{
        document.getElementById("imc-result").innerHTML = imc.toFixed(2)
        aviso(imc)
    }
})
function aviso(imc) {
    if (imc < 18.5) {
        document.getElementById("aviso").innerHTML = "esta só pó da rabiola"
    }else if(imc > 18.5 && imc < 24.9){
        document.getElementById("aviso").innerHTML = "segundo a OMS esse IMC indica que voce esta no seu melhor peso 'segundo a OMS porque na real tu ta so o bagaço'"
    }else if(imc > 25.0 && imc < 29.9){
        document.getElementById("aviso").innerHTML = "rapaz tu ta perfeito"
    }else if(imc > 30.0 && imc < 34.9){
        document.getElementById("aviso").innerHTML = "já ta começando a ficar gordo"        
    }else if(imc > 35 && imc < 39.9){
        document.getElementById("aviso").innerHTML = "Quero ser chato não mais e melhor comer menos e fazer um exercicio porque tu vai morrer"
    }else if(imc > 40){
        document.getElementById("aviso").innerHTML = "irmao tu já morrer se tiver comida no velorio chama eu😊"
    }
    if(imc < 1){
        document.getElementById("aviso").innerHTML = "nesse caso voce e o Gustavo Carvalho"
    }
}

// Nota para quem ler meu codigo o eu posso indentificar quando a pessoa coloca 0 ou numero negativo mais isso ia acabar com a zuera sobre meu amigo gustavo pfv entenda olha linha 31