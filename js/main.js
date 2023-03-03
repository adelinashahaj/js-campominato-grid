
const gridDom = document.getElementById('grid');


const domButton = document.querySelector('#playBtn');

domButton.addEventListener('click',
     function(){

        for (let i = 0; i < 100; i++) {

            const currentElement = createNewSquare(i);
        
            currentElement.addEventListener('click', function() {
                this.classList.toggle('clicked');
                
            });
            
            gridDom.append(currentElement);
        
        }
        
        function createNewSquare(numero) {
            const currentElement = document.createElement('div');
            currentElement.classList.add('square');
            currentElement.append(numero);
            return currentElement;
        
        }
});
