const task = document.getElementById('task')

const submit = document.getElementById('submit')

const form = document.querySelector('form')

submit.addEventListener('click', function (e) {
  e.preventDefault()
  addTask(task)
})

function addTask(task) {
  const ulist = document.createElement('ul')
  const list = document.createElement('li')
  const text = document.createTextNode(task.value)
  list.append(text)
  ulist.append(list)
  form.appendChild(ulist)
}
