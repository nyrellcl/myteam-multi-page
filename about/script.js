const card = document.querySelector(".director-grid__card");
const btn = document.querySelector(".director-grid__card__icon");
const firstInfo = document.querySelector(".director-grid__card__info")
const secondInfo = document.querySelector(".director-grid__card__second__info")


//secondInfo.style.display = "none";


btn.addEventListener('click', ()=>{
    secondInfo.classList.toggle('appear');
    firstInfo.style.display = "none"
    secondInfo.style.display = "flex";
    btn.style.transform = "rotate(360deg)";
    btn.style.transformOrigin = "0deg";
    btn.disabled = true;
    btn.style.backgroundColor = "#79c8c7"
    setTimeout(function(){
        btn.disabled = false;
        btn.style.transform = "rotate(0deg)";
        btn.style.backgroundColor = "#f67e7e";
        firstInfo.style.display = "flex";
        secondInfo.style.display = "none"
    }, 1000)
});

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
} /*for when the user opens the hamburger menu*/

/*for (let i = 0; i < card.length; i++){
    card[i].classList.toggle('appear')
}*/