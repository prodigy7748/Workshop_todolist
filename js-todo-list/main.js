// TO DO
window.addEventListener('DOMContentLoaded', function(){
  let lists = document.querySelectorAll('li')
  for (let i = 0; i < lists.length; i++){
    lists[i].addEventListener('click', function(){
      lists[i].classList.toggle('checked')
    })
  }
})