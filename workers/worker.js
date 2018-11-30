ordenaNativo = function()
{
    var numeros = new Array();
    tamMax = valor;
    for(var i = 0; i< tamMax; i++)
    {
      numeros[i] = Math.floor((Math.random() * 100) + 1);
    }    
    numeros.sort(function(a, b)
    {
        
        return a-b;
       
    });
      console.log(numeros);
      document.getElementById("result").innerHTML ="VETOR: " +numeros;
     
}
self.onmessage = function(event)
{
    var numeros = parseInt(event.data.numeros);
    self.postMessage(numeros);
}
