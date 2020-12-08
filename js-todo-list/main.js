// TO DO
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('ul li').addEventListener('click',function(){
    const li = document.querySelector('ul li')
      li.classList.toggle('checked')
  })

  document.querySelector('span').addEventListener('click', function(){
    document.querySelector('span').remove()
  })
})