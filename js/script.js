const link = document.querySelector('.login__link');

function checkStatus() {
	let token = localStorage.getItem('auth-token');
	if (!token) {
		link.textContent = 'Admin';
		link.setAttribute('href', './pages/admin.html');
	} else {
		link.textContent = 'Login';
		link.setAttribute('href', './pages/login.html');
	}
}

checkStatus();
