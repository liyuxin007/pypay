	$(function(){
			var i=0;
			var clone=$('.img li').first().clone();
			$('.img').append(clone);
			var size=$('.img li').size();
			$('.num li').first().addClass('on').siblings().removeClass('on');
			
			$('.btn_l').click(function() {
				moveL();
			});
	
			$('.btn_r').click(function(){
				moveR();
			})
			function moveR(){
				i++;
				if(i==size){
					$('.img').css({'left':'0px'})
					i=1;
				}
				$('.img').stop().animate({left:-590*i})
				if(i==size-1){
					$('.num li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('.num li').eq(i).addClass('on').siblings().removeClass('on');
				}
			}
			function moveL(){
				i--;
				if(i==-1){
					$('.img').css({'left':-(size-1)*590});
					i=size-2;
				}
				$('.img').stop().animate({left:-590*i},1000)
				$('.num li').eq(i).addClass('on').siblings().removeClass('on');
			}	
		
			$('.num li').hover(function(){
				i=$(this).index();
				$('.img').stop().animate({left:-590*i},500);
				$(this).addClass('on').siblings().removeClass('on');
			})
			
			var t=setInterval(function(){
				moveR();
			},2000)
			
			$('.banner1').hover(function(){
				clearInterval(t);
			},function(){
				t=setInterval(function(){
					moveR();
				},2000)
			})
			$(".banner1").hover(function(){
				$(".banner1 .btn").css("display","block")
			},function(){
				$(".banner1 .btn").css("display","none")
			})
		})