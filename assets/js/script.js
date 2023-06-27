const pageRating = document.querySelector('.page-rating')

const pageThanks = document.querySelector('.page-thanks')

const submit = document.getElementById('submit')

const rateAgain = document.getElementById('rate-again')

const number = document.querySelectorAll('.number')

const rating = document.querySelector('.rating')

submit.addEventListener("click", ()=>{
    pageThanks.classList.remove("hidden")
    pageRating.style.display = "none"
})

rateAgain.addEventListener('click', ()=>{
    pageThanks.classList.add("hidden")
    pageRating.style.display = "block"
})

number.forEach((rate) =>{
    rate.addEventListener('click', ()=>{
        rating.innerHTML = rate.innerHTML
    })
})