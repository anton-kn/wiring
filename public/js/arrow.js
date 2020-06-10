const cover = document.querySelector('.cover');
const arrow = document.querySelector('.arrow');

cover.addEventListener('mousemove',(event)=>{
	//console.log(event);
	console.log(window.pageYOffset);
	if(window.pageYOffset > 300){
		arrow.style.display = 'block';
		arrow.className = 'arrow showarrow';
	}else{
		arrow.style.display = 'none';
		arrow.className = 'arrow';
	}
});


arrow.addEventListener('click', ()=>{
	window.scrollTo(0,0);
	arrow.style.display = 'none';
});