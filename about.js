console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted');
}

function complimentUser() {
	alert('You handle that mouse very well');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catPic = document.querySelector('#cat')

catPic.addEventListener('mouseover', complimentUser);
