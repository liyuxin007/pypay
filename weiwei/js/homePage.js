$(function(){
	$(".a").hover(function(){
		$(".none").css("display","block")
	},function(){
		$(".none").css("display","none")
	})
	$(".none").mouseenter(function(){
		$(".none").css("display","block")
	}).mouseleave(function(){
		$(".none").css("display","none")
	})
	$(".dp2 li:eq(0)").addClass("on")
	$(".dp2 li").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
	$(".z").mouseenter(function(){
		$(this).addClass("on").siblings().removeClass("on")
		$(this ).children("ul").show().children("li").mouseenter(function(){
			$(this).addClass("on1").siblings().removeClass("on1")
		})
	})
	$(".z").mouseleave(function(){
		$(".z").removeClass("on")
		$(this ).children("ul").hide()
		$(".up li").removeClass("on1")
	})
	
	var name=["欣瑞源 简约单人办公桌","米兰斯 布艺功能沙发","全友 青年书桌","瀚庭全棉空调被","瀚庭透气冰丝席","天开 柚木实木电视柜"] 
	
	for(var i=0; i<name.length; i++){
					$(".box3").append('<p>'+name[i]+'</p>')
				}
	$("#text").focus(function(){
					$(".box3").show();
	});
	$("#text").blur(function(){
					setTimeout(function(){
						$(".box3").hide();
					},300);
				});
	$(".box3 p").click(function(){
					$("#text").val($(this).text())
			});
			
			$("#img1").hover(function(){
				$(".ws2").css("display","block")
			},function(){
				$(".ws2").css("display","none")
			})
	$(".rl").hover(function(){
		$(".rl span").css("display","block")
	},function(){
		$(".rl span").css("display","none")
	})
	$(".lf li").mouseenter(function(){
				$(this).addClass("none4").siblings().removeClass("none4");
				var index=$(this).index();
				$(".clear_a > div").eq(index).show().siblings().hide();
			})
	$(".box6s span").hover(function(){
		$(this).addClass("a_a").siblings().removeClass("a_a")
		var index=$(this).index();
				$(".allbox6 > div").eq(index).show().siblings().hide();
	})
	
		$(window).scroll(function(){
					var a=$(this).scrollTop()
					if(a<1000){
					$(".box_scroll").css("display","none")
					
				}else{
					$(".box_scroll").css("display","block")
					$(".box_scroll").addClass("active")
				}
			})
					$(".box_scroll").click(function(){
						$("html").animate({scrollTop:0},1000)
						
						$("body").animate({scrollTop:0},1000)
					})
	
		
})