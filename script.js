const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const navBar = document.querySelector('.mobile')

if (window.matchMedia("(max-width: 768px)").matches) {
    console.log('Mobile view')
    menuBtn.addEventListener('click', function(e) {
    e.preventDefault() 
    navBar.style.display = 'flex'
    
})
closeBtn.addEventListener('click', function(e) {
    e.preventDefault() 
    navBar.style.display = 'none'
})
}
else {
    navBar.style.display = 'none'
}