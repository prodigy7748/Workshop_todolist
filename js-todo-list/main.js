// TO DO
window.addEventListener('DOMContentLoaded', function(){
  const ul = document.querySelector('ul')
  const addBtn = document.querySelector('#addBtn')
  
  addBtn.addEventListener('click',function(){
    const input_value = document.querySelector('#input').value
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.textContent = ('x')
    span.classList.add('close')
    li.textContent = (input_value)
    console.log(input_value)
    li.appendChild(span)
    ul.insertAdjacentElement('beforeEnd', li)
  })
})