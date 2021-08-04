window.addEventListener('load', ()=> {
    let MAX_COUNT_POINTS = 1200;
    let PROGRESS = 0;
    const arrow = document.querySelector('.level__arrow');
    const score_element = document.querySelector('.level__info-score');  

    const changeCheckbox = ({ target }) => 
        !~(PROGRESS+=(target.getAttribute('data-progress') * (target.classList.toggle('skills__checkbox_active') || -1))) ||
        arrow.style.setProperty('transition-duration', `.5s`) ||
        arrow.style.setProperty('--arrow-rotate', `${180 / 100 * PROGRESS}deg`) ||
        !~(score_element.textContent = MAX_COUNT_POINTS / 100 * PROGRESS) ||
        score_element.style.setProperty('color', ['#ffc815', '#a3cd3b', '#0093d7'].find((с,i) => PROGRESS >= 33 * i && PROGRESS <= 33 * ++i));
        
    document.querySelectorAll('.skills__checkbox').forEach(checbox => checbox.addEventListener('click', changeCheckbox));
})