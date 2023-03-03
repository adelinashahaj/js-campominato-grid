//ho creato le stringe e ho dato i valori dentro ogni stringa
let gridDom = document.getElementById('grid');
let caselledaSelezionareDom = document.getElementById('casellaSelezione');
let facileDom = document.getElementById('facile');
let medioDom = document.getElementById('medio');
let dificileDom = document.getElementById('dificile');

let domButton = document.querySelector('#playBtn');
//verifico se 

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