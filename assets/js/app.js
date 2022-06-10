const btns = document.querySelectorAll(".card-rating-item")
const cardRating = document.querySelector(".card-rating")
const cardThankYou = document.querySelector(".card-thank-you")
const starAmount = document.querySelector(".card-thank-you-amount")

let activeButton;

btns.forEach((btn) => {

    btn.addEventListener('click', () => {
        if(activeButton) activeButton.classList.remove('active')
        activeButton = btn;
        btn.classList.add('active')
    })

})

const submitButton = document.querySelector('.card-rating-submit')
submitButton.addEventListener('click', () => {
    if(activeButton) {
        cardRating.classList.add('disable')
        cardThankYou.classList.remove('disable')
        starAmount.innerHTML = activeButton.value
    }
})