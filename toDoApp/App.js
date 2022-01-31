const task = document.getElementById('task')

const submit = document.getElementById('submit')

const form = document.querySelector('form')

const appDiv = document.querySelector('appDiv')

// creating message to show the status of tasks
const message = document.createElement('li')
const text = document.createTextNode('No Tasks Yet!')
message.append(text)
message.classList.add('message')

form.appendChild(taskStatus)

submit.addEventListener('click', function (e) {
  e.preventDefault()
  addTask(task)
})

function addTask(task) {
  // creating elements dynamically
  const ulist = document.createElement('ul')
  const list = document.createElement('li')
  const text = document.createTextNode(task.value)
  const remover = document.createElement('button')

  // assigning class to remove button
  remover.classList.add('btn')
  remover.textContent = 'X'

  // appending elemets dynamically
  list.appendChild(remover)

  list.classList.add('list')

  list.append(text)
  ulist.append(list)
  form.appendChild(ulist)

  // adding event listener on remove button
  remover.addEventListener('click', function (e) {
    e.preventDefault()
    ulist.remove(list)
  })
}
