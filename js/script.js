const btns = document.querySelector('.navbuttons');
const nav = document.querySelector('.primary-navigation');

btns.addEventListener('click', (e) => {
    if(nav.getAttribute('aria-expanded')=='false') {
        nav.setAttribute('aria-expanded',"true");
        checkbtnstate ();
    }else{
        nav.setAttribute('aria-expanded',"false");
        checkbtnstate ();
    }
});

function checkbtnstate (){
    if(btns.classList.contains('open')) {
        btns.classList.remove('open');
        btns.classList.add('close');
    }else{
        btns.classList.remove('close');
        btns.classList.add('open');
    }
}

