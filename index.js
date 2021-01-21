let randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber2}.png`);

document.querySelector("h1").innerHTML = (randomNumber1>randomNumber2)?"Player 1 Wins":(randomNumber1==randomNumber2)?"DRAW":"Player 2 Wins";