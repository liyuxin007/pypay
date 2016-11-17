var str = "";

for(var i = 0; i < 4;i++){
	var num = parseInt(Math.random() * 100) % 3;
	var randomNum = 0;
	
	if(num == 0){
		randomNum = parseInt(Math.random() * 1000) % 10 + 48;
	}else if(num == 1){
		randomNum = parseInt(Math.random() * 1000) % 26 + 65;
	}else{
		randomNum = parseInt(Math.random() * 1000) % 26 + 97;
	}
	
	str = str.concat(String.fromCharCode(randomNum));
}
	var div=document.getElementById("random")
	div.innerHTML =str 
	

div.onclick=function(){
	var str = "";

for(var i = 0; i < 4;i++){
	var num = parseInt(Math.random() * 100) % 3;
	var randomNum = 0;
	
	if(num == 0){
		randomNum = parseInt(Math.random() * 1000) % 10 + 48;
	}else if(num == 1){
		randomNum = parseInt(Math.random() * 1000) % 26 + 65;
	}else{
		randomNum = parseInt(Math.random() * 1000) % 26 + 97;
	}
	
	str = str.concat(String.fromCharCode(randomNum));
}
	div.innerHTML=str
}



