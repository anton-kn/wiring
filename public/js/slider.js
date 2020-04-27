// переключаем слайдер
function showSlider(n){
	let fig = document.querySelectorAll('.fig');
	console.log(fig.length);
	for(let i=0; i<fig.length; i++){
		if(i==n){
			fig[n].className = 'fig showing';
		} else {
			fig[i].className = 'fig';
		}
	}
}



function switchSlider() {
	counter++;
	if (counter > 3) {
		counter = 0;
	}
	showSlider(counter);
}

// запускаем слайдер по нажатию левой стрелки
const arrowLeft = document.getElementById("sim-arrow-left");
arrowLeft.onclick = ()=>{
	counter--;
	if (counter < 0) {
		counter = 3;
	}
	showSlider(counter);
}

// запускаем слайдер по нажатию правой стрелки
const arrowRight = document.getElementById("sim-arrow-right");
arrowRight.onclick = ()=>{
	switchSlider();
}


// устанавливаем первоначальное значение
let counter = 0;
showSlider(counter);

// перекючаем слайдеры автоматически через N секунд
setInterval(switchSlider, 4000);
