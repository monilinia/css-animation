var x = 0;
var y = 0;
var alive = true;
var start;

window.onload =  function(){ 
	//каждые 1.5 секунды цветок будет рандомно менять положение, область выбрана на лесной опушке
	start = setInterval("startMotion()",1500);	
}
	//определение координат
	function rand(num) 
	{ 		
		return Math.floor(Math.random() * num) + 1; 
	}	
	function startMotion(){
		if (alive) {
			
			var flower = document.getElementById("kvetka");
			x = rand(100);
			y = rand(780);
			flower.style.top = x+200+"px";
			flower.style.left = y + "px";
		}
	}
	//рост цветка при клике, запускаем анимацию css
	function growth() {
	if(alive) {
		alive = false;
		var flower = document.getElementById("kvetka");
		flower.style.top = 300+"px";
		flower.style.left = 400 + "px";
		
		flower.setAttribute("class","bigFlower");
		clearInterval(start);
		for(var i=1; i<7; i++){
			document.getElementById("circle"+i).setAttribute("class","circle");
		}
		document.getElementsByTagName("h2")[0].setAttribute("class","firstText");
		//повторный клик возвращает нас к новому поиску папарать-кветки
	} else {
		alive=true;
		var flower = document.getElementById("kvetka");
		flower.setAttribute("class", "pulse");	
		for(var i=1; i<7; i++){
			document.getElementById("circle"+i).removeAttribute("class");
		}
		document.getElementsByTagName("h2")[0].removeAttribute("class");
		start=setInterval("startMotion()",1500);
		}
	}