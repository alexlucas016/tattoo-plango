var menuItem = document.getElementById('menu-item');

menuItem.style.maxHeight = "0px";
function menutoggle() {
    if(menuItem.style.maxHeight == '0px') {

        menuItem.style.maxHeight = "200px";
    }else {
        menuItem.style.maxHeight = "00px";
    }
}

window.addEventListener("scroll",  function() {
    var header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0)
})