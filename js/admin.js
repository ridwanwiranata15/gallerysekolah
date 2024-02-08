const logo = document.getElementById('logo');
const subMenu = document.getElementById('sub-menu-wrapper');
const tutup = document.getElementById('tutup');
const myAdmin = document.getElementById('myModal');
const myBtn = document.getElementById('myBtn');

myBtn.addEventListener('click', ()=>{
    myAdmin.style.display = 'block';
})
tutup.addEventListener('click', ()=>{
    myAdmin.style.display = 'none';
})

logo.addEventListener('click', ()=>{
    subMenu.classList.toggle('tampil');    
})