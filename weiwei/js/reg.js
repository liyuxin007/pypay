
$(function(){
	$(".text1").click(function(){
		var t=$(".text1").attr("t")
		if(t==1){
			$(".text1").addClass("text12")
			$(".text1").attr("t","2")
		}else{
			$(".text1").removeClass("text12")
		$(".text1").attr("t","1")
		}
		
	})
})
	



onload=function(){
	var tp_a=document.getElementsByClassName("tp_a")[0]
	var tp_b=document.getElementsByClassName("tp_b")[0]
	var tp_c=document.getElementsByClassName("tp_c")[0]
	var a=document.getElementsByClassName("a")[0]
	var b=document.getElementsByClassName("b")[0]
	var c=document.getElementsByClassName("c")[0]
	var d=document.getElementsByClassName("d")[0]
	var oDiv = document.getElementById("result");
	var yanzen1=document.getElementsByClassName("yanzen1")[0]
	
	var phoneyz=document.getElementsByClassName("tp_c")[0]
	var last=document.getElementsByClassName("dl")[0]
	var b=document.getElementsByClassName("b")[0]
	
	
	
	
	
	
	
	
	
	
	
	tp_a.onblur = function() {
		var reg = /^1\d{10}$/;
		var taxt=tp_a.value
		
		if(!reg.test(taxt)){
			$(".a").show().siblings('p').hide();
		}else{
			$(".a").hide().siblings('p').hide();
		}
	
	}
	
	
	tp_b.onblur = function() {
		var taxt=tp_b.value

		if(taxt==str){
			$(".b").hide().siblings('p').hide();
		}else{
			$(".b").show().siblings('p').hide();
		}
	
		}
	
	tp_c.onblur = function() {
		var taxt=tp_c.value

		if(!taxt==""){
			$(".c").hide()
		}else{
			$(".c").show()
		}
	
		}
	
	last.onclick=function(){
		
		var taxt=tp_a.value
		
		if(taxt==""){
			$(".aa").show().siblings('p').hide();
		}else{
			$(".aa").hide().siblings('p').hide();
		}
	
		var taxt=tp_b.value

		if(taxt==""){
			$(".bb").show().siblings('p').hide();
		}else{
			$(".bb").hide().siblings('p').hide();
		}
	
	
		
		var taxt=tp_c.value

		if(!taxt==""){
			$(".c").hide()
		}else{
			$(".c").show()
		}
	
		
		
			var t=$(".text1").attr("t")
		if(t==1){
		
				$(".d").show()
		}else{
				$(".d").hide()
		
		}
	}
}


