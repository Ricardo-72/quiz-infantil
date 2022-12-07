const btnMobile = document.getElementById('btn-mobile');

    function toggletMenu(event) {
    
    if (event.type === 'touchstart') event.preventDefaul;

    const nav = document.getElementById('nav');

    nav.classList.toggle('active');

    const active = nav.classList.constant ('active');

    event.currentTarget.setAttribute('aria-expanded', active);

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
} 
    else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
}
}
btnMobile.addEventListener('click',toggletMenu);

btnMobile.addEventListener('touchstart',toggletMenu);

