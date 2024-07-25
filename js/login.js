const elForm = document.querySelector('.form');
const elInputUsername = document.querySelector('.form__input-username');
const elInputPassword = document.querySelector('.form__input-password');
const API = 'https://dummyjson.com';

elForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let user = {
		username: elInputUsername.value,
		password: elInputPassword.value,
	};

	fetch(`${API}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			if (res.token) {
				localStorage.setItem('auth-token', res.token);
				open('/pages/admin.html', '_self');
			} else {
				alert('username or password is incorrect');
			}
		});
});
