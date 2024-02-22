const menu = document.querySelector('.header .nav-bar .nav-list .menu');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

menu.addEventListener('click', () => {
	menu.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#fff';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		menu.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Always display the password prompt when the page loads
    document.getElementById('passwordPrompt').style.display = 'flex';
});

function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = '123456789'; // This is your predefined password

    if (passwordInput === correctPassword) {
        // Directly show the protected content without using localStorage
        showContent();
    } else {
        alert('Incorrect Key'); // Show an error message for incorrect password
        document.getElementById('password').value = ''; // Optionally clear the input field after an incorrect attempt
    }
}

function showContent() {
    // Hide the password prompt and show the protected content
    document.getElementById('passwordPrompt').style.display = 'none';
    document.getElementById('protectedContent').style.display = 'block';
}
