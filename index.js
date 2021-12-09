var n = Math.random();
n= n*6;
n= Math.floor(n) +1;

if(n===1){
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice1.png");
}
else if(n===2){
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png");
}
else if(n===3){
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice3.png");
}
else if(n===4){
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice4.png");
}
else if(n===5){
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png");
}
else {
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png");
}

var m = Math.random();
m= m*6;
m= Math.floor(m) +1;

if(m===1){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png");
}
else if(m===2){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
}
else if(m===3){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png");
}
else if(m===4){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png");
}
else if(m===5){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
}
else {
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");
}

if(n>m){
    document.querySelector("h1").innerHTML= "Player 1 Wins!";
}
else if(n==m){
    document.querySelector("h1").innerHTML ="Draw!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}