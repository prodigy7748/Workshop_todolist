// TO DO
window.addEventListener('DOMContentLoaded', function(){
  const ul = document.querySelector('ul')
  const addBtn = document.querySelector('#addBtn')
  
  addBtn.addEventListener('click',function(){
    let input_value = document.querySelector('#input').value
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.textContent = ('x')
    span.classList.add('close')
    li.textContent = (input_value)
    if (input_value != ''){
      li.insertAdjacentElement('beforeEnd', span)
      ul.insertAdjacentElement('beforeEnd', li)
    }else{
      alert('輸入標題啊，混蛋!!!')
    }
    input_value = ''
  })
})
