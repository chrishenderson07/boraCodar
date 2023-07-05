let initialQuantity = document.querySelector('.display-quantity')
let ingredientsQuantity = document.querySelectorAll('ul span')

let counter = 1
initialQuantity.innerHTML = counter

ingredientsQuantity.forEach((ingredient) => {
	ingredient.innerHTML = counter
})

const sub = document.querySelector('button.sub')
const plus = document.querySelector('button.plus')

sub.addEventListener('click', () => {
	if (counter <= 1) return alert('Não é possivel fazer uma porção menor')
	--counter
	initialQuantity.innerHTML = counter
	ingredientsQuantity.forEach((ingredient) => {
		ingredient.innerHTML = counter
	})
})

plus.addEventListener('click', () => {
	++counter
	initialQuantity.innerHTML = counter
	ingredientsQuantity.forEach((ingredient) => {
		ingredient.innerHTML = counter
	})
})
