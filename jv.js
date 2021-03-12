var clicks = 0;
var a1 = 10;
var a2 = 20; 
var a3 = 30;
var a4 = 40;
var a5 = 50; 
var a6 = 60;
var a7 = 70;
var a8 = 80; 
var a9 = 90;
let ganhador = 0;

//funções que colocam X ou O nas casas
function casa1(){
    if (clicks <= 9 && a1 == 10){
        var c1 = window.document.getElementById("casa1")
        if (clicks % 2 == 0) {
            c1.innerHTML = "X"
            c1.style.background = "lightgreen"
            a1 = 0
            clicks++
        }else {
            c1.innerHTML = "o"
            c1.style.background = "red"
            a1 = 1
            clicks++
        }
    }
}

function casa2(){
    if (clicks <= 9 && a2 == 20){
        var c2 = window.document.getElementById("casa2")
        if (clicks % 2 == 0) {
            c2.innerHTML ="X"
            c2.style.background = "lightgreen"
            a2 = 0
            clicks++
        }else {
            c2.innerHTML = "o"
            c2.style.background = "red"
            a2 = 1
            clicks++
        }
    }
}

function casa3(){
    if (clicks <= 9 && a3 == 30){
        var c3 = window.document.getElementById("casa3")
        if (clicks % 2 == 0) {
            c3.innerHTML ="X"
            c3.style.background = "lightgreen"
            a3 = 0
            clicks++
        }else {
            c3.innerHTML = "o"
            c3.style.background = "red"
            a3 = 1
            clicks++
        }
    }
}

function casa4(){
    if (clicks <= 9 && a4 == 40){
        var c4 = window.document.getElementById("casa4")
        if (clicks % 2 == 0) {
            c4.innerHTML ="X"
            c4.style.background = "lightgreen"
            a4 = 0
            clicks++
        }else {
            c4.innerHTML = "o"
            c4.style.background = "red"
            a4 = 1
            clicks++
        }
    }
}

function casa5(){
    if (clicks <= 9 && a5 == 50){
        var c5 = window.document.getElementById("casa5")
        if (clicks % 2 == 0) {
            c5.innerHTML ="X"
            c5.style.background = "lightgreen"
            a5 = 0
            clicks++
        }else {
            c5.innerHTML = "o"
            c5.style.background = "red"
            a5 = 1
            clicks++
        }
    }
}

function casa6(){
    if (clicks <= 9 && a6 == 60){
        var c6 = window.document.getElementById("casa6")
        if (clicks % 2 == 0) {
            c6.innerHTML ="X"
            c6.style.background = "lightgreen"
            a6 = 0
            clicks++
        }else {
            c6.innerHTML = "o"
            c6.style.background = "red"
            a6 = 1
            clicks++
        }
    }
}

function casa7(){
    if (clicks <= 9 && a7 == 70){
        var c7 = window.document.getElementById("casa7")
        if (clicks % 2 == 0) {
            c7.innerHTML ="X"
            c7.style.background = "lightgreen"
            a7 = 0
            clicks++
        }else {
            c7.innerHTML = "o"
            c7.style.background = "red"
            a7 = 1
            clicks++
        }
    }
}

function casa8(){
    if (clicks <= 9 && a8 == 80){
        var c8 = window.document.getElementById("casa8")
        if (clicks % 2 == 0) {
            c8.innerHTML ="X"
            c8.style.background = "lightgreen"
            a8 = 0
            clicks++
        }else {
            c8.innerHTML = "o"
            c8.style.background = "red"
            a8 = 1
            clicks++
        }
    }
}

function casa9(){
    if (clicks <= 9 && a9 == 90){
        var c9 = window.document.getElementById("casa9")
        if (clicks % 2 == 0) {
            c9.innerHTML ="X"
            c9.style.background = "lightgreen"
            a9 = 0
            clicks++
        }else {
            c9.innerHTML = "o"
            c9.style.background = "red"
            a9 = 1
            clicks++
        }
    }
}

function restart(){
    window.location.reload()
}

//função que mostra quem ganhou
function corpo(){
    var res = window.document.getElementById("resultado")
    if (a1 == a2 && a2 == a3){
        if (a1 == 0){
            res.innerHTML = "JOGADOR X GANHOU!"
            clicks = 10
            ganhador = 1;
        }else{
            res.innerHTML = "JOGADOR O GANHOU!"
            clicks = 10
            ganhador = 1;
        }
    }
    
    if (a4 == a5 && a5 == a6){
        if (a4 == 0){
            res.innerHTML = "JOGADOR X GANHOU!"
            clicks = 10
            ganhador = 1;
        }else{
            res.innerHTML = "JOGADOR O GANHOU!"
            clicks = 10
            ganhador = 1;
        }
    }    

    if (a7 == a8 && a8 == a9){
        if (a7 == 0){
            res.innerHTML = "JOGADOR X GANHOU!"
            clicks = 10
            ganhador = 1;
        }else{
            res.innerHTML = "JOGADOR O GANHOU!"
            clicks = 10
            ganhador = 1;
        }    
    }
    
    if (a1 == a5 && a5 == a9){
        if (a1 == 0){
            res.innerHTML = "JOGADOR X GANHOU!"
            clicks = 10
            ganhador = 1;
        }else{
            res.innerHTML = "JOGADOR O GANHOU!"
            clicks = 10
            ganhador = 1;
        }    
    }

    if (a3 == a5 && a5 == a7){
        if (a3 == 0){
            res.innerHTML = "JOGADOR X GANHOU!"
            clicks = 10
            ganhador = 1;
        }else{
            res.innerHTML = "JOGADOR O GANHOU!"
            clicks = 10
            ganhador = 1;
        }    
    }

    if (a1 == a4 && a4 == a7){
        if (a1 == 0){
            res.innerHTML = "JOGADOR X GANHOU!"
            clicks = 10
            ganhador = 1;
        }else{
            res.innerHTML = "JOGADOR O GANHOU!"
            clicks = 10
            ganhador = 1;
        }    
    }

    if (a2 == a5 && a5 == a8){
        if (a2 == 0){
            res.innerHTML = "JOGADOR X GANHOU!"
            clicks = 10
            ganhador = 1;
        }else{
            res.innerHTML = "JOGADOR O GANHOU!"
            clicks = 10
            ganhador = 1;
        }    
    }

    if (a3 == a6 && a6 == a9){
        if (a3 == 0){
            res.innerHTML = "JOGADOR X GANHOU!"
            clicks = 10
            ganhador = 1;
        }else{
            res.innerHTML = "JOGADOR O GANHOU!"
            clicks = 10
            ganhador = 1;
        }    
    }

    // se der velha
    if (clicks == 9 && ganhador == 0){
        res.innerHTML = "DEU VELHA!"
    } else {
        res.InnerHTML = "vish"
    }
}

//função que conta os clicks
/*function contar(){
    var cont = window.document.getElementById("contagem");
    cont.innerHTML = clicks;
}*/