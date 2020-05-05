const work = document.querySelector('.work');

menu.onclick = ()=>{
    work.className = 'work show';
    work.style.display = 'block';
}

const buttonsMobile = document.querySelector('#buttons-mobile');
const mobile = document.querySelector('#mobile');

mobile.onclick = ()=>{
    buttonsMobile.style.display = 'block';
    // mobile.style.display = 'none';
}

// console.log(buttonsMobile);
window.onclick = (event)=>{
    console.log(`X = ${event.clientX} and Y = ${event.clientY}`);
    console.log(document.documentElement.clientHeight);
    console.log(event.target.tagName);
    if(event.clientX >=200 || event.clientY >=200 ) {
        buttonsMobile.style.display = 'none';
        // mobile.style.display = 'block';

    }

    if(event.target.tagName == 'P'|| event.target.tagName =='DIV'){
        work.style.display = 'none';
        work.className = 'work';
        // work.style.display = 'block';
    }
}