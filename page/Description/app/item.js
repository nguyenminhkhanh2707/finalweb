const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [... imgs];
let imgId = 1;

imgBtns.forEach((imgItem)=> {
    imgItem.addEventListener('click',(event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    })
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId -1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

/* otro js*/

var inicio=1;
function aumentar(){

	var cantidad = document.getElementById('cantidad').value = ++inicio;
} 

function disminuir(){ 
	var cantidad = document.getElementById('cantidad').value;
	if (cantidad > 1) {
		cantidad = document.getElementById('cantidad').value = --inicio;
	}
	 
}