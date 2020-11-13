var numofsquares=6;
var colors=randomColors(numofsquares);
var picked=pick();
var h1=document.querySelector("h1");
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=picked;
var uff=document.querySelector("#uff");
var reset=document.getElementById("reset");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");
easybtn.addEventListener("click",function(){
	numofsquares=3;
	hardbtn.classList.remove("btn");
	easybtn.classList.add("btn");
	 colors=randomColors(numofsquares);
	 picked=pick();
	colordisplay.textContent=picked;
	for(var i=0;i<squares.length;i++){
		if(i<=2){
			squares[i].backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
			

	}
		}
		



})
hardbtn.addEventListener("click",function(){
	numofsquares=6;
	easybtn.classList.remove("btn");
	hardbtn.classList.add("btn");
	 colors=randomColors(numofsquares);
	 picked=pick();
	 colordisplay.textContent=picked;
	 for(var i=0;i<squares.length;i++){
		
			squares[i].backgroundColor=colors[i];
			squares[i].style.display="block";
			

	
		}
		


})
reset.addEventListener("click",function(){
	 colors=randomColors(numofsquares);
	 picked=pick();
	colordisplay.textContent=picked;
	this.textContent="New Colors";
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
}
   h1.style.backgroundColor="steelblue";
   uff.textContent="";
})


var squares=document.querySelectorAll(".box");
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		console.log(clickedcolor,picked);
		
		if(clickedcolor==picked){
			uff.textContent="Correct!!";	
			changecolor(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
			reset.textContent="Play Again";		
			
		}
		else
			{this.style.backgroundColor="#232323";
		    uff.textContent="Try again";

		}




	})
}
function changecolor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}

}
function pick(){
	var col=Math.floor(Math.random()*colors.length);
	return colors[col];
}

function randomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr[i]=rand();
	}
	return arr;

}

function rand(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}