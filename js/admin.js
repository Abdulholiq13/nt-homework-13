let token = localStorage.getItem('auth-token');
const elLogoutBtn = document.querySelector('.logout-btn');

function checkToken() {
	if (!token) {
		window.location.replace('/pages/login.html');
	}
}

function handleLogout() {
	localStorage.removeItem('auth-token');
	open('/pages/login.html', '_self');
}

elLogoutBtn.addEventListener('click', handleLogout);
