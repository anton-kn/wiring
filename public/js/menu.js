const pull = document.getElementById('pull')
// const navUl = document.querySelector('nav ul')
const menu = document.getElementById('myMenu')

pull.addEventListener('click', (event)=>{
	if(menu.className === 'clearfix'){
		menu.className += ' show'
	} else{
		menu.className = 'clearfix'
	}
	// console.log(event)
	// navUl.style.display = 'block'
})

window.onclick = (event)=>{
	console.log(`X= ${event.clientX}, Y= ${event.clientY}`)
	if(event.clientY > 300){
		// navUl.classList.remove()
		menu.className = 'clearfix'
		// navUl.style.visibility = 'hidden'
	}
}
