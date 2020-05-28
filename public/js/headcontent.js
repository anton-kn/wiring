import list from './List/list.js'


const text = document.getElementById('text');
function addContent(arr){
  arr.forEach((item, i) => {
    let tegP = document.createElement('p');
    tegP.innerHTML = item;
    text.append(tegP);
  });

}

addContent(list)
