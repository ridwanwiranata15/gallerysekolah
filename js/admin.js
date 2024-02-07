const logo = document.getElementById('logo');
const subMenu = document.getElementById('sub-menu-wrapper');

logo.addEventListener('click', ()=>{
    subMenu.classList.toggle('tampil');    
})