const card = document.querySelector(".director-grid__card");
const btn = document.querySelectorAll(".director-grid__card__icon");
const firstInfo = document.querySelectorAll(".director-grid__card__info")
const secondInfo = document.querySelectorAll(".director-grid__card__second__info")

const showQuote = show =>{
    const button = show.currentTarget;
    const quoteShowing = button.getAttribute("aria-expanded") === "true";
    if (quoteShowing){
        button.setAttribute("aria-expanded", "false");
    }else{
        button.setAttribute("aria-expanded", "true")
    }
};

btn.forEach((button)=>{
    button.addEventListener('click', showQuote)
})




/*btn[0].addEventListener('click', () => {
    btn[0].style.transform = "rotate(360deg)";
    btn[0].style.transformOrigin = "0deg";
    btn[0].disabled = true;
    btn[0].style.backgroundColor = "#79c8c7"

    secondInfo[0].classList.toggle('appear');
    firstInfo[0].style.display = "none"
    secondInfo[0].style.display = "flex";

    //console.log('box 1 clicked')
})

for (const btns of btn) {
    btns.addEventListener('click', () => {
        btns.style.transform = "rotate(360deg)";
        btns.style.transformOrigin = "0deg";
        btns.disabled = true;
        btns.style.backgroundColor = "#79c8c7"
        setTimeout(function(){
            btns.disabled = false
            btns.style.transform = "rotate(0deg)"
            btns.style.backgroundColor = "#f67e7e";
        }, 1000)
        for(const seconds of secondInfo){
            seconds.classList.toggle('appear')
            seconds.style.display = "flex"
            setTimeout (function(){
                seconds.style.display = "none"
                
            }, 1000)
        }
        for(const first of firstInfo){
            first.style.display = "none"
            setTimeout (function(){
                first.style.display = "flex"
                
            }, 1000)
        }
        //console.log('box clicked')
    })
}

/*btn.addEventListener('click', () => {
    for (let i = 0; i < btn.length; i++) {
        btn[i].style.transform = "rotate(360deg)";
        btn[i].style.transformOrigin = "0deg";
        btn[i].disabled = true;
        btn[i].style.backgroundColor = "#79c8c7"
    }
})*/


/*btn.addEventListener('click', () => {
    secondInfo.classList.toggle('appear');
    firstInfo.style.display = "none"
    secondInfo.style.display = "flex";
    btn.style.transform = "rotate(360deg)";
    btn.style.transformOrigin = "0deg";
    btn.disabled = true;
    btn.style.backgroundColor = "#79c8c7"
    setTimeout(function () {
        btn.disabled = false;
        btn.style.transform = "rotate(0deg)";
        btn.style.backgroundColor = "#f67e7e";
        firstInfo.style.display = "flex";
        secondInfo.style.display = "none"
    }, 1000)
});*/

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
} /*for when the user opens the hamburger menu*/

