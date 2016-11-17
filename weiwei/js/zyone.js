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
				$(".select ul").mouseenter(function(){
					$(".select_a").show().mouseenter(function(){
						$(this).addClass("on22").siblings().removeClass("on22")
					})
					
				})
				$(".select ul").mouseleave(function(){
					$(".select_a").hide().removeClass("on22")
					
				})
				$(".shop_box").hover(function(){
					$(".shop1").show();
					$(".shop").addClass("on33")
				},function(){
					$(".shop1").hide();
					$(".shop").removeClass("on33")
				})
			$(".num1").hover(function(){
				$(".mall_type").show();
			},function(){
				$(".mall_type").hide();
			})
			$(".num2_b").mouseenter(function(){
				$(this).children("ul").show()
			})
			$(".num2_b").mouseleave(function(){
				$(this).children("ul").hide()
			})
			$(".num2_a_box span").hover(function(){
				$(this).addClass("onspan")
				
			},function(){
				$(this).removeClass("onspan")
			})
			$(".img_small_a ").mouseenter(function(){
				
				var index=$(this).index()-1;
				$(".img1 > li").eq(index).show().siblings().hide();
				$(".max img").attr('src','img/big'+(index+1)+'.png')
			
			})
			
				var name_a=["北京","天津","河北","山西","内蒙","辽宁","吉林","上海","江苏","浙江","安徽",
					"福建","江西","山东","河南","湖北","湖南","广东","广西","海南","重庆","贵州","云南",
					"西藏","陕西","甘肃","青海","宁夏","新疆","台湾","澳门","海外"]
				for(var i=0; i<name_a.length; i++){
					$(".qg_ul ul").append('<li>'+name_a[i]+'</li>')
				}
				$(".qg p").hover(function(){
					$(".qg_ul").show()
				},function(){
					$(".qg_ul").hide()
				})
				$(".qg_ul").hover(function(){
					$(".qg_ul").show()
				},function(){
					$(".qg_ul").hide()
				})
				$(".qg_ul ul li").hover(function(){
					$(this).addClass("on22")
				},function(){
					$(this).removeClass("on22")
				})
				$(".add").click(function(){
					var a=$(".pay input").val()
					     a=parseInt(a)+1
					$(".pay input").val(a)
				})
				$(".reduce").click(function(){
					var a=$(".pay input").val()
					     a=parseInt(a)-1
					$(".pay input").val(a)
					if(a<1){
						$(".pay input").val(1)
					}
				})
//				alert($(window).height())
				$(window).on('scroll ',function(){
					var a=$(this).scrollTop()
					if(a<700||a>3700){
					$(".center_scroll").css("display","none")
					
				}else{
					$(".center_scroll").css("display","block")
					
				}
					var top=$("html").scrollTop();
					$(".r_daohang").css({top:top})

					var top=$(window).scrollTop();
					$(".r_daohang").css({top:top})
//				
				})
				$(".bck").click(function(){
					$("html").animate({scrollTop:0},1000)
					$("body").animate({scrollTop:0},1000)
				})
				$(".a_s  .imgborder").mouseenter(function(){
				
					var index=$(this).index()
					$(".imgborder_a").mouseenter(function(){
						$(this).parent(".imgborder").addClass("imgbackground").siblings().removeClass("imgbackground")
					
					$(".imgbig_box > div").eq(index).show().siblings().hide();
					})
					
				})
				
				$(".ar").hover(function(){
					$(".r_daohang_a_hy").show()
				},function(){
					$(".r_daohang_a_hy").hide()
				})
				
				
				$(".a_s .imgborder").mouseleave(function(){
					
					$(".n").hide()
					$(".imgborder").removeClass("imgbackground")
				
				})
				$(".center_a span").click(function(){
					$(this).addClass("height").siblings().removeClass("height")
					var index=$(this).index()
					$(".center_box >div").eq(index).show().siblings().hide()
				})
				var top=$(".center_a").offset().top;
				$(window).scroll(function() {
					if($(window).scrollTop()>=top){
						$(".center_a").addClass('active');
						$(".center_scroll").addClass('active1');
							
					}else{
						$(".center_a").removeClass('active');
						$(".center_scroll").removeClass('active1');
					
					}
				});
				
				$(".center_scroll").click(function(){
					var t=$(".center_scroll").attr("t")
					if(t==1){
						$(".img_fl").hide()
						$(".center_scroll img").attr('src','img/zyllf2.png')
					$(".center_scroll").css("left",47)
					$(".center_scroll").attr("t","2")
					}else{
							$(".img_fl").show()
							$(".center_scroll img").attr('src','img/zyllff.png')
							$(".center_scroll").css("left",242)
							$(".center_scroll").attr("t","1")
					}
					
				})
				
				$(".center_a1 span").click(function(){
					$(this).addClass("height").siblings().removeClass("height")
				
				})
				
			
				$(".succes div").click(function(){
					$(".succes").hide()
				})
				$(".succes_a2").click(function(){
					$(".succes").hide()
				})
				
				
				//cookie
				$(".money_shop").click(function(){
					
					$('.shopgw span').remove();
					$(".shopgw img").remove();
					$(".succes").show();
					$.cookie("name",$(".fltwo h3").text(),{expires:7});
					$.cookie("name1",$(".fltwo .money_one").text(),{expires:7});
					$.cookie("src",$("#imgx img").attr('src'),{expires:7});
					if($.cookie('name')==undefined){
					$('.shopgw').hide()
					$(".shop_math").hide()
					
				}
				else{
					$(".shop_cent").hide();
					$('.shopgw').show()
					$(".shop_math").show()
					
					$('.shopgw').append('<span>'+$.cookie('name')+'</span>');
					$('.shopgw').append('<img src="'+$.cookie('src')+'" />');
					$('.shopgw').append('<span>￥'+$.cookie('name1')+'</span>');
				}
				})
				if($.cookie('name')==undefined){
					$('.shopgw').hide()
					$(".shop_math").hide()
				}
				else{
					$(".shop_cent").hide();
					$(".shopgw").show()
					$(".shop_math").show()
				}
				$('.shopgw').append('<span>'+$.cookie('name')+'</span>');
				$('.shopgw').append('<img src="'+$.cookie('src')+'" />');
				$('.shopgw').append('<span>￥'+$.cookie('name1')+'</span>');

				
				if($.cookie('name')==1){
					$('.shopgw').hide()
					$(".shop_math").hide()
					$(".shop_cent").show();
				}
				$(".shanchu").click(function(){
					
					$.cookie("name",1)
					$.cookie("name1",1)
					$.cookie("src",1)
					$(".shopgw").hide()
					$(".shop_math").hide()
					$(".shop_cent").show();
					
			})
				
				
				
		})

