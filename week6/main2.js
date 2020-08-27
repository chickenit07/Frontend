"use strict"
document.addEventListener("DOMContentLoaded",function(){
	var  x = document.getElementById('nut');
	var khoi = document.getElementsByClassName('card')
	x.onclick = function(){
		khoi[0].classList.toggle('turnRight');
	}
},false);