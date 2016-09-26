window.setTimeout(function(){
      $("#music").attr({"src":"music/circulation.mp3","loop":"loop"})
},29000);
var juli=1300*(0.5-0.41),shopdoor=0.51,bridge=0.21,bridge1=0.24,bridge2,winWidth,winHeight;
// 获取窗口宽度
if (window.innerWidth)
      winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
      winWidth = document.body.clientWidth;
// 获取窗口高度
if (window.innerHeight)
      winHeight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
      winHeight = document.body.clientHeight;
shopdoor=shopdoor*winWidth+"px";
bridge=bridge*winWidth+"px";
bridge1=bridge1*winWidth+"px";
bridge2=0.5*winWidth-juli+"px";
$("#content").animate({"opacity":"1"},1000,function(){console.log("1");});
$("em").delay(29000).animate({"opacity":"1"},1000);
$("body").css({"width":winWidth+"px","height":winHeight+"px"});
$("#boy").animate({"left":shopdoor},5000,"linear").delay(6000).animate({"bottom":"28%","opacity":"0"},3000,function(){$("#boy").removeClass("walk").addClass("walkFlower");}).animate({"bottom":"15.3%","opacity":"1"},1000,"linear").animate({"left":bridge},8000,"linear").animate({"left":bridge1,"bottom":"28.4%"},1000,"linear").animate({"left":bridge2},2000,"linear",function(){$("#boy").removeClass("walkFlower").css({"backgroundPosition":"600px 290px"})}).animate({"width":"150px"},3000,function(){$("#boy").addClass("b-turn");$("#girl").addClass("g-turn");setInterval(snow,200);});
$(".door1").delay(11000).animate({"left":"-50%"},500).delay(3000).animate({"left":"0%"},500);
$(".door2").delay(11000).animate({"left":"150%"},500).delay(3000).animate({"left":"50%"},500);
$(".content-wrap").delay(5000).animate({"left":"-100%"},6000,"linear").delay(4000).animate({"left":"-200%"},8000,"linear");
$(".cloud1").animate({"left":"80%"},21000,"linear");
$(".cloud2").animate({"left":"80%"},11000,"linear");
$("#sun").animate({"left":"20%"},20000,"linear");
function snow(){
      var num = Math.floor(Math.random()*6),flowerURL = ["images/55adde2a0001a91d00410041.png","images/55adde7f0001433000410041.png","images/55adde120001d34e00410041.png","images/55adde5500013b2500400041.png","images/55adde62000161c100410041.png","images/55addee7000117b500400041.png"],positionTop = Math.random()*100+"%",positionBottom = Math.random()*100+"%",time = Math.floor((Math.random()*3000)+4000);
      var $flower = $("<div></div>");
      $flower.css({"width":"41px","height":"41px","background":"url("+flowerURL[num]+")","position":"absolute","top":"-21px","left":positionTop}).addClass("flower").animate({"top":"100%","left":positionBottom},time,"linear",function(){this.remove();});
      $("#snowflake").append($flower);
      }
console.log("谢谢观看！")