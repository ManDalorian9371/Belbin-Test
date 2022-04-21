const emailInput = document.getElementById('emailInput');
const userFirstName = document.getElementById('userFirstName');
const userLastName = document.getElementById('userLastName');
const check = document.getElementById('check');
const emailBtn = document.getElementById('emailBtn');

const rahnama = document.querySelector('.rahnama');
const information = document.querySelector('.informations');
let shoro = 0;

check.addEventListener(
	'input',
	() => (check.checked == true ? (emailBtn.disabled = false) : (emailBtn.disabled = true))
);
emailBtn.addEventListener('click', () => {
	if (shoro == 0) {
		shoro++;
		emailBtn.innerText = 'شروع آزمون';
		document.querySelector('h1').innerText = 'مشخصات خود را وارد نمایید';
		rahnama.style.display = 'none';
		information.style.display = 'block';
		userFirstName.focus();
	} else {
		catchEmail();
	}
});
function catchEmail(){
	localStorage.setItem('email', emailInput.value);
	localStorage.setItem('userFirstName', userFirstName.value);
	localStorage.setItem('userLastName', userLastName.value);
	console.log(localStorage.getItem('email'));

	window.open('index2.html', '_self');
}
