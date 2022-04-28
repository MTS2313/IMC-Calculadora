var call_coform = document.getElementById("submit-form");
var imc;

call_coform.addEventListener("click",()=>{
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var altura_conv = altura/100;
    imc =  peso / (altura_conv * altura_conv)
    document.getElementById("imc-result").innerHTML = imc.toFixed(2)
    aviso(imc)
})