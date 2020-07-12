const btn = document.getElementById('btn')
const p = document.getElementById('p')

btn.addEventListener('click', () => {
	const result = confirm('Aceptas?')
	result ? p.innerHTML = 'Welcome :D !' : p.innerHTML = 'GG :('
})