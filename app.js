//function for the menu

function menu(e){
    const Navbar = document.querySelector('.Navbar');
    e.name = e.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
    Navbar.classList.toggle('opacity-0');
}