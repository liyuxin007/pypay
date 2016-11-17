var inpt_c=document.getElementsByClassName("tp_c")[0];
var span_c=document.getElementsByClassName("span_a3")[0]
inpt_c.onblur = function() {
if(inpt_c.value==""){
			span_c.style.display="block"
		}else{
			span_c.style.display="none"
		}
	}
	var reg=/^1\d{10}$/;
	var re=/\w{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z]{1,}/;
	var ra=/^[a-zA-Z0-9]{6,20}$/ ;
	var tp_a=document.getElementsByClassName("tp_a")[0]
	var tp_b=document.getElementsByClassName("tp_b")[0]
	var tp_c=document.getElementsByClassName("tp_c")[0]
	tp_a.onblur = function() {
		var taxt=tp_a.value
	if((reg.test(taxt)||(re.test(taxt)))){
	  	$('.span_a11').show().siblings('span').hide();
   
	  }else{
	  	$('.span_a1').show().siblings('span').hide();
	  }
}
	tp_b.onblur = function() {
	
		var taxt=tp_b.value
		
		if(!ra.test(taxt)){
			$('.span_a2').show().siblings('span').hide();
		}
	}
	tp_c.onblur = function() {
		var taxt=tp_c.value

		if(taxt==str){
			$('.span_a33').show().siblings('span').hide();
		}else{
			$('.span_a3').show().siblings('span').hide();
		}
	}
	var buttn=document.getElementsByClassName("dl")[0]
	buttn.onclick=function(){
		
		var taxt_a=tp_a.value
		var taxt_b=tp_b.value
		var taxt_c=tp_c.value
		
		
		
		if(taxt_a==""){
			$('.span_a111').show().siblings('span').hide();
		}
		if(taxt_b==""){
			$('.span_a222').show().siblings('span').hide();
		}
		if(taxt_c==""){
			$('.span_a333').show().siblings('span').hide();
		}
		
	}