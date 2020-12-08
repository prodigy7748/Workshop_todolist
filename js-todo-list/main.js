// TO DO
window.addEventListener('DOMContentLoaded', function(){
  const remove_btn = document.querySelectorAll('.close')
  const lists = document.querySelectorAll('ul li')
    for (var i = 0; i < lists.length; i++) {
      remove_btn[i].addEventListener('click', function(){
      lists[i].remove()
    })
  }
})