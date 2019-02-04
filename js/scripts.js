var btn = document.getElementById('btn');
var p = document.getElementById('p');
var result;
btn.addEventListener('click', () => {
	result = confirm('Aceptas?');
	result ? p.innerHTML = 'Bienvenido al lado oscuro :D !' : p.innerHTML = 'GG :(';
});