const operation = document.querySelector('.operation')
const result = document.querySelector('.result')

const keys = document.querySelectorAll('.key')

keys.forEach((key) => {
	key.addEventListener('click', (e) => {
		operation.textContent += key.value

		if (operation.textContent.length >= 16) {
			alert('Só são permitidos números caracteres')
			return
		}
		return
	})
})

function handleResult() {
	result.textContent = eval(operation.textContent)
	operation.textContent = result.textContent

	if (result.textContent.length >= 14) {
		result.textContent = result.textContent.slice(0, 10) + '...'
	}
}

function clearAll() {
	result.textContent = ''
	operation.textContent = ''
}

function clearOperate() {
	let newOperator = operation.textContent
	operation.textContent = newOperator.substring(0, newOperator.length - 1)
}
