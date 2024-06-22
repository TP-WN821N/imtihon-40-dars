const headerMenu = document.getElementById('header_menu')
const headerList = document.querySelector('.header_list')
const select = document.getElementById('header_select')
const overlay = document.getElementById('overlay')

headerMenu.addEventListener('click', () => {
  headerList.classList.toggle('header_toggle')
  overlay.classList.toggle('overlay')
})