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
     function formatar(atual){
        return atual.
     }
     function mat(){
        let V = document.getElementById("valor").value;
        let j = document.getElementById("juros").value;
        let t = document.getElementById("meses").value;

        if(Number)(V){
            alert("o valor deve ser um numero");
            document.getElementById("valor").value="";
            document.getElementById("valor").focus();
            return
        }
        if(Number)(j){
            alert(" juros deve ser numero");
            document.getElementById("juros").value="";
            document.getElementById("juros").focus();
            return
        }
        if(Number)(t){
            alert("juros deve ser numero");
            document.getElementById("meses").value="";
            document.getElementById("meses").focus();
            return


        let r=0;
        for(let i=1; i<=t; i++){
             r= v+(1+)(j/100);
             v=r;
             document.write("Mes"+i+"="+r+"<br>");

        }
         document.write("Resultado "+ r);


     }
     function multiplicar(){
         let n1=document.getElementById("v1").value;
         let n2=document.getElementById("v2").value;
         let n3=document.getElementById("v3").value;
         let r=(Number)n1)+Number(n2)+ Number (n3))/3;
         Document.getElementById("dividir")innerHTML="media:"+r;
    
         function dividir(){
            let n1=document.getElementById("v1").value;
            let n2=document.getElementById("v2").value;
            let n3=document.getElementById("v3").value;
            let r=(Number)n1)+Number(n2)+ Number (n3))/3;
            Document.getElementById("multiplicar")innerHTML="media:"+r;
       
    
    
    

     }

