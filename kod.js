// JavaScript source code

var elem = document.getElementById('tartalomalap');
var szamlalo = 0;
var ossz = 0;
var jegy = 0;
function hozzaad()
{
       
      
    var masolat = elem.cloneNode(true);
  
    elem.parentNode.appendChild(masolat);
    masolat.style.display = "block";
   
}
function szamol()
{
    jegy =document.getElementById("jegyek").value*1;

    szamlalo++;
    ossz += jegy;
    
    var atlag = ossz / szamlalo;
    document.getElementById("eredmeny").value =jegy;
}