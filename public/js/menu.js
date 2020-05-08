// const buttonsMobile = document.querySelector('#buttons-mobile');
const svg = document.querySelector('.svg');
const nav = document.querySelectorAll('.nav');

svg.onclick = ()=>{
	nav.forEach(function(name,index){
		// nav[index].className = "menu-mobile";
		nav[index].style.display = 'block';
	});
    // nav.style.display = 'block';
}

// console.log(buttonsMobile);
window.onclick = (event)=>{
    // console.log(`X = ${event.clientX} and Y = ${event.clientY}`);
    console.log(document.documentElement.clientHeight);
    // console.log(event.target.tagName);
    if(event.clientX >=200 || event.clientY >=200 ) {

    	nav.forEach(function(name,index){
			nav[index].style.display = 'none';
			// nav[index].className = "nav";
		});
        
    }    
}