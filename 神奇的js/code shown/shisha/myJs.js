// JavaScript Document
//获取ID
function $( v ){
	if( typeof v === 'function' ){
		window.onload = v;
	} else if ( typeof v === 'string' ) {
		return document.getElementById(v);
	} else if ( typeof v === 'object' ) {
		return v;
	}
}
//比如2017:02:05小于十时加0
function addZero(t){
    return t= t<10 ? "0"+t : ""+t;
}
//获取对象的style属性值
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
//对象，速度，结束点值，style属性，回调函数（就是一个函数执行完毕后再执行另外一个函数）
function doMove(obj,speed,end,attr,endFn){
	//var timer = null;
	clearInterval(obj.timer);
	speed = parseInt(getStyle(obj,attr))<end ? speed : -speed;
	obj.timer = setInterval(function(){
			var next = parseInt(getStyle(obj,attr))+speed;
			if(next>=end&&speed>0 || next<=end&&speed<0){
				next = end;
			}
			obj.style[attr] = next + "px";
			if(parseInt(getStyle(obj,attr))==end){
				clearInterval(obj.timer);
				if(endFn){endFn();}
				}
		},30);
}
//domove  回调函数  例子
// $("btn").onclick = function(){
//     doMove($("div1"),5,600,"left",function(){
//         doMove($("div1"),5,700,"top",function(){
//             doMove($("div1"),5,0,"left",function(){
//                 doMove($("div1"),5,100,"top",function(){
//                     //$("div1").style.opacity = "1";
//                 })
//             })
//         })
//     })
// }
function getPosition(obj,attr){
	var iAttr = 0;
	while(obj){
		iAttr += obj["offset"+attr];
		obj = obj.offsetParent;
	}
	return iAttr;
}

function getByClass(oParent,sClass,sTagName){
	//var aEle = oParent.getElementsByTagName("*");
	var aEle = oParent.getElementsByTagName(sTagName);
	var arr = [];
	for(var i=0;i<aEle.length;i++){
		var newArr = aEle[i].className.split(" ");
		for(var j=0;j<newArr.length;j++){
			if(newArr[j]==sClass){
				arr.push(aEle[i]);
				break;
			}
		}
	}
	return arr;
}
//给对应的obj添加删（及其判断是否有）除其属性名sclass
function addClass(obj,sClass){
	var arr = obj.className.split(" ");
	if(arrIndexOf(arr,sClass)==-1){
		obj.className += " "+sClass;
	}
}
function removeClass(obj,sClass){
	var arr = obj.className.split(" ");
	if(arrIndexOf(arr,sClass)!=-1){
		arr.splice(arrIndexOf(arr,sClass),1);
		obj.className = arr.join(" ");
	}
}
function arrIndexOf(arr,sClass){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==sClass){
			return i;
		}
	}
	return -1;
}

function mouseWheel(obj,fnUp,fnDown){//滚动条滚动事件
	var b = true;
	if(navigator.userAgent.indexOf("Firefox")>=0){
		obj.addEventListener("DOMMouseScroll",//事件
		function(ev){//函数
			b=ev.detail<0?true:false;
			b ? fnUp() : fnDown();
			ev.preventDefault();//火狐浏览器用这一句阻止浏览器的默认滚动条行为
			},false)//是否捕获,false就是不捕获，冒泡的意思
	}else{
		obj.onmousewheel = function(){
			b= event.wheelDelta>0?true:false;
			b ? fnUp() : fnDown();
			return false;//标准浏览器用这句阻止浏览器的默认滚动条行为
			}
		}
}