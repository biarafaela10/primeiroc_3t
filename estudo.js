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
function minhaTabuada(){
    for(let 1 = 5; i <=10; i++){
    document.write((tabuada +" x " +i+"="+(tabuada*8)+"<br>"); 
    for(let 1= 1; i <=10; j++)
    document.write( i +" x "+j+"=" + "+(j+i)+"<br>");

        document.write("<br>");
    }

    }
    function cubo(){
     for(let i = 1; i <= 20; i++){
        document.write("O cubo  de " + i + " é " + i + " x " + i + "<br>"); 

     }
  
     function mat(){
        let V = document.getElementById("valor").value;
        let j = document.getElementById("juros").value;
        let t = document.getElementById("meses").value;
        let r=0;
        for(let i=1; i<=t; i++){
             r= v+(1+)(j/100);
             v=r;

        }
         document.write("Resultado "+ r);


     }
  