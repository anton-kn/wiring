const cover = document.querySelector('.cover');
const arrow = document.querySelector('.arrow');

cover.addEventListener('mouseover',(event)=>{
	// console.log(event);
	if(window.pageYOffset > 300){
		arrow.className = 'arrow showarrow';
	}else{
		arrow.className = 'arrow';
	}
});


arrow.addEventListener('click', ()=>{
	window.scrollTo(0,0);
	arrow.className = 'arrow';
});