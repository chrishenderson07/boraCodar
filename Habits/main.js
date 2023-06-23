const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('#register')

button.onclick = () => add()
form.onchange = () => save()

function add() {
	nlwSetup.addDay('27/01')
	const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
	const dayExists = nlwSetup.dayExists(today)

	if (dayExists) {
		alert('Dia já incluso')
		return
	}

	alert('Adicionado com sucesso')
	nlwSetup.addDay(today)
}

function save() {
	localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()
