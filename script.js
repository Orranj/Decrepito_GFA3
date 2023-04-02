var n1 = Math.floor(Math.random()*21);
var n2 = Math.floor(Math.random()*21);
var n3 = Math.floor(Math.random()*21);

document.getElementById("n1").innerHTML = n1;
document.getElementById("n2").innerHTML = n2;
document.getElementById("n3").innerHTML = n3;
var biggest = n1;
if (n2 > biggest) {
  biggest = n2;
}
if (n3 > biggest) {
  biggest = n3;
}

if(biggest==n1){
  document.getElementById("most").innerHTML = "The treasure chest with the most gold is: Treasure Chest 1 ("+n1+")";
}
if(biggest==n2){
  document.getElementById("most").innerHTML = "The treasure chest with the most gold is: Treasure Chest 2 ("+n2+")";
}
if(biggest==n3){
  document.getElementById("most").innerHTML = "The treasure chest with the most gold is: Treasure Chest 3 ("+n3+")";
}
if(biggest==n1&&n1==n2){
  document.getElementById("most").innerHTML = "The treasure chest with the most gold is: Treasure Chest 1 and 2 ("+n1+")";
}
if(biggest==n2&&n2==n3){
  document.getElementById("most").innerHTML = "The treasure chest with the most gold is: Treasure Chest 2 and 3 ("+n2+")";
}
if(biggest==n1&&n1==n3){
  document.getElementById("most").innerHTML = "The treasure chest with the most gold is: Treasure Chest 1 and 3 ("+n1+")";
}
if(n1==n2&&n2==n3&&n1==n3){
  document.getElementById("most").innerHTML = "The treasure chest with the most gold is: Treasure Chest 1, 2, and 3 ("+n1+")";
}

var alphabet = 'ABCDEFGHIJKLMNOPQRSTWXYZ';
var letter = alphabet.charAt(n1-1);
document.getElementById("initial").innerHTML = "The intial of the treasure chest owner it used to belong to is: "+letter;
if(letter==0){
  document.getElementById("initial").innerHTML = "The intial of the treasure chest owner it used to belong to is: A";
}
var hrmin = n2*n3;
var hr = Math.floor(hrmin/60);
var min = hrmin%60;
document.getElementById("time").innerHTML = "The time it took the adventurer to find the hidden treasure room is ("+hrmin+" mins): "+hr+"hr/s and "+min+"mins"
