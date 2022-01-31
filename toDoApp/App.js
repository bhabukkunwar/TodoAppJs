const task = document.getElementById('task')

const submit = document.getElementById('submit')

const form = document.querySelector('form')

const appDiv = document.querySelector('appDiv')

// // creating message to show the status of tasks
// // const message = document.createElement('li')
// // const messageText = document.createTextNode('No Tasks Yet!')
// // message.append(messageText)
// // message.classList.add('message')
// // message.style.marginTop = '5rem'
// // message.style.color = '5rem'

// form.appendChild(message)

submit.addEventListener('click', function (e) {
  e.preventDefault()

  addTask(task)
})

function addTask(task) {
  // form.removeChild(message)
  // creating elements dynamically
  const ulist = document.createElement('ul')
  const list = document.createElement('li')
  const text = document.createTextNode(task.value)

  list.classList.add('list')
  ulist.classList.add('ul')

  list.append(text)
  ulist.append(list)
  form.append(ulist)

  // changging the color of taks when on mouse hover
  list.addEventListener('mouseover', function (e) {
    e.preventDefault()
    list.classList.add('colorchange')
  })
  list.addEventListener('mouseout', function (e) {
    e.preventDefault()
    list.classList.remove('colorchange')
  })
}
