

let texts = ['Перша частина', 'Друга частина', 'Третя частина']
let element = document.querySelector('.elem');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
	
let i = 0
element.innerHTML = texts[i]

next.addEventListener('click', () => {
    i++;
    if (i == 3) {
        i = 0
    }
    element.innerHTML = texts[i]
    
})

prev.addEventListener('click', () => {
    i--;
    if (i == -1) {
        i = texts.length - 1;
    }
    element.innerHTML = texts[i]
    
})