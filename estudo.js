let tabuada = 2;
let nome = "beatriz rafaela";

function escreva(){

    document.write(tabuada +" x 1 = "+(tabuada*1)+"<br>");
    document.write(tabuada +" x 1 = "+(tabuada*2)+"<br>");
    document.write(tabuada +" x 1 = "+(tabuada*3)+"<br>");
    document.write(tabuada +" x 1 = "+(tabuada*4)+"<br>");
    document.write(tabuada +" x 1 = "+(tabuada*5)+"<br>");
    document.write(tabuada +" x 1 = "+(tabuada*6)+"<br>");
    document.write(tabuada +" x 1 = "+(tabuada*7)+"<br>");
    document.write(tabuada +" x 1 = "+(tabuada*8)+"<br>");
    document.write(tabuada +" x 1 = "+(tabuada*9)+"<br>");
    document.write(tabuada +" x 1 = "+(tabuada*10)+"<br>");
    
}
//for(inicio;validaçao: incremento)
function moeda(atual) {
    return atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
  
  function total() {
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let r = moeda;
  
  
    if (!Number(c)) {
  
      alert("O capital deve ser numeros.");
      document.getElementById("valor").value = "";
      document.getElementById("valor").focus();
      return;
    }
  
    if (!Number(j)) {
      alert("O juros deve ser numeros.");
      document.getElementById("juros").value = "";
      document.getElementById("juros").focus();
      return;
    }
  
    if (!Number(t)) {
      alert("O meses deve ser numeros.");
      document.getElementById("meses").value = "";
      document.getElementById("meses").focus();
      return;
    }
    let mes = "";
  
    for (let i = 1; i <= t; i++) {
      r = c * (1 + (j / 100));
      mes += i + ": " + moeda(r) + "<br>";
      //document.write("Mês " + i + " valor: " + moeda(r) + "<br>");
      c = r;
    }
    document.getElementById("mes").innerHTML=mes; 
    document.getElementById("total").innerHTML= moeda(r);
    //document.write("Resultado: " + moeda(r));
  }
  
  function limpar(){
    document.getElementById("mes").innerHTML = "";
    document.getElementById("total").innerHTML="0,00";
    document.getElementById("valor").value = "";
    document.getElementById("juros").value = "";
    document.getElementById("meses").value = "";
  }
