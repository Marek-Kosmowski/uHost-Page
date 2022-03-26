const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');


// console.log(modal);


const selectAllPlanButton = function () {
    for (let i = 0; i < selectPlanButtons.length; i++) {
        selectPlanButtons[i].addEventListener('click', () => {
            modal.style.display = 'block';
            backdrop.style.display = 'block';
            modal.classList.add('open');
            backdrop.classList.add('open');
        })
    }
}

const closeModal = function () {
    if (modal) {
        modal.style.display = 'none';
    }
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}


toggleButton.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
})


selectAllPlanButton();
if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}
backdrop.addEventListener('click', closeModal);
// modalNoButton.addEventListener('click', closeModal);
// backdrop.addEventListener('click', closeModal);



ctaButton.addEventListener('animationstart', (e) => {
    console.log('Animation started ', e)
})

ctaButton.addEventListener('animationend', (e) => {
    console.log('Animation ended ', e)
})

ctaButton.addEventListener('animationiteration', (e) => {
    console.log('Animation iterated ', e)
})
// backdrop.style.display = 'block';
// modal.style.display = 'block';