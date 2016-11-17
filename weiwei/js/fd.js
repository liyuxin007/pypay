 var min = document.querySelector(".img"),
        max = document.querySelector(".max"),
        enlarge = document.querySelector(".fd_a"),
        img = document.querySelector(".max img");
  
        min.onmouseover = function () {
            // 1.鼠标覆盖显示max和enlarge
            max.style.display = "block";
            enlarge.style.display = "block";
            // 离开时隐藏
            min.onmouseout = function () {
                max.style.display = "none";
                enlarge.style.display = "none";
            }
            // 2.enlarge的移动范围
           
            min.onmousemove = function (evt) {
            	var events=evt||event
                // 鼠标触摸的点
                var x = events.clientX - min.offsetLeft - enlarge.offsetWidth /2;
                var y = events.clientY - min.offsetTop - enlarge.offsetHeight*2;
              
                
                // 最大移动距离
                var maxX = min.clientWidth - enlarge.offsetWidth;
                var maxY = min.clientHeight - enlarge.offsetHeight
                // 边界判断
                if (x <= 0) {
                    x = 0;
                } else if (x >= maxX) {
                    x = maxX;
                }
                if (y <= 0) {
                    y = 0;
                } else if (y >= maxY) {
                    y = maxY;
                }
                // enlarge的位置
                enlarge.style.left = x + "px";
                enlarge.style.top = y +"px";
                // 移动比例 (enlarge/min = max/img)
                var yidongX = x / maxX;
                var yidongY = y / maxY;
                // 3.max的对应显示
                img.style.left = yidongX * (max.clientWidth - img.offsetWidth) + "px";
                img.style.top = yidongY * (max.clientHeight - img.offsetHeight) + "px";
            }
        }

 			$(window).on('scroll ',function(){	
					var top=$(window).scrollTop();	
					 enlarge.style.top = top +"px";//有待改进。。
			min.onmouseover = function () {
				
				
            // 1.鼠标覆盖显示max和enlarge
            max.style.display = "block";
            enlarge.style.display = "block";
            // 离开时隐藏
            min.onmouseout = function () {
                max.style.display = "none";
                enlarge.style.display = "none";
            }
            // 2.enlarge的移动范围
           
            min.onmousemove = function (evt) {
            	var events=evt||event
                // 鼠标触摸的点
                var x = events.clientX - min.offsetLeft - enlarge.offsetWidth /2;
                var y = events.clientY - min.offsetTop - enlarge.offsetHeight*2+top;
              
                
                // 最大移动距离
                var maxX = min.clientWidth - enlarge.offsetWidth;
                var maxY = min.clientHeight - enlarge.offsetHeight
                // 边界判断
                if (x <= 0) {
                    x = 0;
                } else if (x >= maxX) {
                    x = maxX;
                }
                if (y <= 0) {
                    y = 0;
                } else if (y >= maxY) {
                    y = maxY;
                }
                // enlarge的位置
                enlarge.style.left = x + "px";
                enlarge.style.top = y +"px";
               
                // 移动比例 (enlarge/min = max/img)
                var yidongX = x / maxX;
                var yidongY = y / maxY;
                // 3.max的对应显示
                img.style.left = yidongX * (max.clientWidth - img.offsetWidth) + "px";
                img.style.top = yidongY * (max.clientHeight - img.offsetHeight) + "px";
            }
            
            
           
        }
				
				})
