const pull = document.getElementById('pull')
const menu = document.getElementById('myMenu')

pull.addEventListener('click', (event)=>{
	if(menu.className === 'clearfix'){
		menu.className += ' show'
	} else{
		menu.className = 'clearfix'
	}
})

window.onclick = (event)=>{
	if(event.clientY > 300){
		menu.className = 'clearfix'
	}
}
