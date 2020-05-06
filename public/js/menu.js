const buttonsMobile = document.querySelector('#buttons-mobile');
// const mobile = document.querySelector('#mobile');

mobile.onclick = ()=>{
    buttonsMobile.style.display = 'block';
}

// console.log(buttonsMobile);
window.onclick = (event)=>{
    // console.log(`X = ${event.clientX} and Y = ${event.clientY}`);
    // console.log(document.documentElement.clientHeight);
    // console.log(event.target.tagName);
    if(event.clientX >=200 || event.clientY >=200 ) {
        buttonsMobile.style.display = 'none';
    }    
}
