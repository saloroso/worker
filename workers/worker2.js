
ordenaBolha = function()
{
    var numeros = new Array();
    var auxiliar = [];
    tamMax = valor;
    for(var i = 0; i< tamMax; i++)
    {
      numeros[i] = Math.floor((Math.random() * 100) + 1);
    }    
    for(var i=0;i<tamMax;i++)
    {
        for(var j=i+1;j<tamMax;j++)
        {
              if(numeros[i]>numeros[j])
            {
                auxiliar = numeros[i];
                numeros[i]=numeros[j];
                numeros[j]=auxiliar;
            }
        }
    }
    for(var x = 0; x < tamMax; x++ )
    {
       numeros[x]= numeros[x];
    } console.log(numeros);
    document.getElementById("result").innerHTML ="VETOR: " +numeros;
    valor =""; 
}
self.onmessage = function(event)
{
    var numeros = parseInt(event.data.numeros);
    self.postMessage(ordenaNativo(numeros));
} 
