
let gridDom = document.getElementById('grid');


let domButton = document.querySelector('#playBtn');

domButton.addEventListener('click',
     function(){
        gridDom.innerHTML="";
        for (let i = 1; i < 101; i++) {

            let currentElement = createNewSquare(i);
        
            currentElement.addEventListener('click', function() {
                this.classList.toggle('clicked');
                console.log(i);
                
            });
            
            gridDom.append(currentElement);
        
        }
        
});
function createNewSquare(numero) {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    currentElement.append(numero);
    return currentElement;

  }