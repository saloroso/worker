var worker = new Worker('workers/worker.js');
var worker2 = new Worker('workers/worker2.js');
var progresso = new Number();
var maximo = new Number();
var progresso = 0;
maximo = 100;
var mnativo = document.getElementById("mnativo");
var mbolha = document.getElementById("mbolha");
worker.addEventListener('message',f1);
worker2.addEventListener('message',f1);
var valor = []; 
$(document).ready(function(){
    $("#valor").keyup(function(e){
        if(e.which == 13)
        {
            valor.push($(this).val());
            $(this).val("");
            console.log(valor);
        }
       
    });6
    
});
function f1(event)
{
    document.getElementById('result').innerHTML = event.data.numeros;

}




