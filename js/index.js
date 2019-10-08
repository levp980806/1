

var resul = document.getElementById("resultado");
var cero = document.getElementById("numero0");
var uno = document.getElementById("numero1");
var dos = document.getElementById("numero2");
var tres = document.getElementById("numero3");
var cuatro = document.getElementById("numero4");
var cinco = document.getElementById("numero5");
var seis = document.getElementById("numero6");
var siete = document.getElementById("numero7");
var ocho = document.getElementById("numero8");
var nueve = document.getElementById("numero9");
var suma = document.getElementById("suma");
var raiz = document.getElementById("raiz");
var pot = document.getElementById("potencia");
var igual = document.getElementById("igual");
var del =document.getElementById("delete");
 
var n1;
var op;  

    uno.onclick = function(){
        resul.innerHTML = resul.innerHTML + "1";
    }
    dos.onclick = function(){
        resul.innerHTML = resul.innerHTML + "2";
    }
    tres.onclick = function(){
        resul.innerHTML = resul.innerHTML + "3";
    }
    cuatro.onclick = function(){
        resul.innerHTML = resul.innerHTML + "4";
    }
    cinco.onclick = function(){
        resul.innerHTML = resul.innerHTML + "5";
    }
    seis.onclick = function(){
        resul.innerHTML = resul.innerHTML + "6";
    }
    siete.onclick = function(){
        resul.innerHTML = resul.innerHTML + "7";
    }
    ocho.onclick = function(){
        resul.innerHTML = resul.innerHTML + "8";
    }
    nueve.onclick = function(){
        resul.innerHTML = resul.innerHTML + "9";
    }
    cero.onclick = function(){
        resul.innerHTML = resul.innerHTML + "0";
    }
    suma.onclick = function(){
        n1 = resul.innerHTML; 
        resul.innerHTML ="+";
        op = resul.innerHTML;
        resul.innerHTML="";
    }
    raiz.onclick = function(){
        n1 = resul.innerHTML; 
        resul.innerHTML ="√";
        op = resul.innerHTML;
        resul.innerHTML = Math.sqrt(parseFloat(n1));
    }
    pot.onclick = function(){
        n1 = resul.innerHTML; 
        resul.innerHTML ="^";
        op = resul.innerHTML;
        resul.innerHTML="";
    }
    igual.onclick = function(){
       switch(op){
           case "+":
               resul.innerHTML = parseFloat(n1)+parseFloat(resul.innerHTML);
               break;   
           case "^":
               resul.innerHTML = Math.pow(parseFloat(n1), parseFloat(resul.innerHTML)); 
               break;  
           
       }
    }

    del.onclick = function(){
     resul.innerHTML = document.clear();
     resul.innerHTML = "";
    }



