var agent=navigator.userAgent.toLowerCase(),msie="Netscape"==navigator.appName&&agent.indexOf("trident")!=-1||agent.indexOf("msie")!=-1,$floatingHeaderReal=$("#floating_header_nav"),$body=msie===!0?$("html"):$("html body"),$smallMenu=$(".small_menu"),$menuRight=$(".menu_right"),$headerRightMenu=$(".floating_header_inner_container_contents_right"),$smallMenuDiv=$(".floating_header_inner_container_contents_right_minimal"),$selectFirstDiv=$(".select_first_div"),$floatingSearch=$("#floating_search"),$floatingSearchBigBtn=$("#floating_search_big_btn"),$floatingSearchBigText=$(".floating_search_big_text"),$searchHideenBar=$(".search_hideen_bar");$(function(){$("#bottom_go_top").click(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,$body.animate({scrollTop:0},"swing")}),$(window).scroll(function(){var e=$body.scrollTop();e>0&&$floatingHeaderReal.hasClass("floating_header_real")&&$floatingHeaderReal.removeClass("floating_header_real").addClass("floating_header_virtual"),e<=0&&$floatingHeaderReal.hasClass("floating_header_virtual")&&$floatingHeaderReal.addClass("floating_header_real").removeClass("floating_header_virtual")}),$(window).resize(function(){"none"===$smallMenuDiv.css("display")?$menuRight.removeClass("small_menu_right").addClass("menu_right"):$menuRight.addClass("small_menu_right").removeClass("menu_right")}),$smallMenu.click(function(e){$headerRightMenu.hasClass("hidden-sm")||$headerRightMenu.hasClass("hidden-xs")===!0?($headerRightMenu.removeClass("hidden-sm").removeClass("hidden-xs"),$menuRight.addClass("small_menu_right").removeClass("menu_right"),$headerRightMenu.hide(),$headerRightMenu.stop().slideToggle("slow")):$headerRightMenu.stop().slideToggle("slow",function(){$headerRightMenu.addClass("hidden-sm").addClass("hidden-xs"),$menuRight.removeClass("small_menu_right").addClass("menu_right"),$headerRightMenu.show()})}),$floatingSearch.on("click",function(){$searchHideenBar.toggle(),"none"===$searchHideenBar.css("display")?$("#fsglyphicon").addClass("glyphicon-search").removeClass("glyphicon-remove"):$("#fsglyphicon").addClass("glyphicon-remove").removeClass("glyphicon-search")}),$floatingSearchBigBtn.on("click",function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,"none"===$floatingSearchBigText.css("display")?($floatingHeaderReal.css({opacity:"1"}),$floatingSearchBigText.css("display","inline-block"),$(this).removeClass("glyphicon glyphicon-search").addClass("glyphicon glyphicon-menu-hamburger")):($floatingHeaderReal.css({opacity:"0.93"}),$floatingSearchBigText.css("display","none"),$(this).removeClass("glyphicon glyphicon-menu-hamburger").addClass("glyphicon glyphicon-search"))}),$(window).trigger("scroll")});