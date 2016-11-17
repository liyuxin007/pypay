$(function(){
				var name=["北京","天津","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海","江苏省","浙江省","安徽省",
"福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆四川省","贵州省","云南省",
"西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区","台湾省","澳门特别行政区","海外"]
				for(var i=0; i<name.length; i++){
					$(".box ul").append('<li>'+name[i]+'</li>')
				}
				$(".box li").eq(0).addClass("on")
				$(".box li").hover(function(){
					$(this).addClass("on1")
				},function(){
					$(this).removeClass("on1")
				})
				$(".box1_span").hover(function(){
					$(".box1_spbox").css("display","block")
					$(this).addClass("on2")
				},function(){
					$(".box1_spbox").css("display","none")
					$(this).removeClass("on2")
				})
				$(".box1_spbox").mouseenter(function(){
					$(".box1_spbox").css("display","block")
					$(".box1_span").addClass("on2")
				}).mouseleave(function(){
					$(".box1_spbox").css("display","none")
					$(".box1_span").removeClass("on2")
				})
				$(".m").mouseenter(function(){
				$(this).addClass("on3").siblings().removeClass("on3")
				$(this ).children("ul").show().children("li")
				.mouseenter(function(){
					$(this).addClass("on11").siblings().removeClass("on11")
				})
				})
				$(".m").mouseleave(function(){
				$(".m").removeClass("on3")
				$(this ).children("ul").hide()
				$(".m li").removeClass("on11")
				})
				
			
				
				$(".add").click(function(){
				
					var a=$(".pay ").val()
					  a=parseInt(a)+1
					$(".pay ").val(a)
				 	
				 
				 	var c=b*(a)
					
					$(".zh4").text(c+".00")
					$(".zh3").text(c+".00")
					$(".zh5").text(c+".00")
				})
				
				var c=0
				$(".reduce").click(function(){
					
					var d=$(".zh3").text()
					
					var a=$(".pay ").val()
					     a=parseInt(a)-1
					$(".pay ").val(a)
					
					if(a<1){
						$(".pay").val(1)
					}else{
						c=d-b						
					$(".zh4").text(c+".00")
					$(".zh3").text(c+".00")
					$(".zh5").text(c+".00")
					}
				})
				
				$('.ll').append('<span>'+$.cookie('name')+'</span>');
				$('.span201').append('<img src="'+$.cookie('src')+'" />');
				$('.llq').append($.cookie('name1'));
				$('.zh3').append($.cookie('name1'));
				$('.zh4').append($.cookie('name1'));
				$('.zh5').append($.cookie('name1'));
				var b=$(".zh3").text()
				if($.cookie('name')==undefined){
					$('.box4').hide()
						$('.center_img').show()
				}else{
					$('.box4').show()
						$('.center_img').hide()
				}
				
				
				
				if($.cookie('name')==1){
					$('.box4').hide()
					$(".center_img").show();
				}
				$(".shanchu1").click(function(){
					$.cookie("name",1)
					$.cookie("name1",1)
					$.cookie("src",1)
					$(".box4").hide()
					$(".center_img").show();
					
			})
				
				})