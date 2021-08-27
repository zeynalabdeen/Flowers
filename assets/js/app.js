// MENU

const menuBtn = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('fa-times');
        menuBtn.classList.remove('fa-bars');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
        menuOpen = false;
    }
})


// FIXED NAVBAR 





// COUNTER

let counterDisplayElem = document.querySelector('.sum');
let counterMinusElem = document.querySelector('.minus');
let counterPlusElem = document.querySelector('.plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click", () => {
    count++;
    updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
    count--;
    updateDisplay();
});

function updateDisplay() {
    if (count < 0) {
        count = 0;
    }
    counterDisplayElem.innerHTML = count;
};


// CAROUSEL 

