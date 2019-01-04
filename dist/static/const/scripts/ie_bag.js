var body = document.getElementsByClassName('loader')[0]
var loader = document.getElementsByClassName('loaderArea')[0]
var popUp = document.getElementsByClassName('pop_up__browser')[0]
var event

body.classList.remove('loader')
loader.classList.add('loaderArea__closed')
popUp.classList.add('pop_up_active')
body.classList.add('pop_up_cond')

var closePopUpBtn = document.getElementById('ie_close_btn')
var closePopUpIcon = document.getElementById('ie_close_icon')
closePopUpBtn.onclick = function  (event) {
	event = event || window.event;
	event.preventDefault();

	body.classList.remove('pop_up_cond');
	popUp.classList.remove('pop_up_active');
};
closePopUpIcon.onclick = function  (event) {
	event = event || window.event;
	event.preventDefault();

	body.classList.remove('pop_up_cond');
	popUp.classList.remove('pop_up_active');
};
