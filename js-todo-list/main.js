// TO DO
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('ul').childNodes.addEventListener('click',function(){
    const li = document.querySelector('ul').childNodes
      li.classList.toggle('checked')
  })
})