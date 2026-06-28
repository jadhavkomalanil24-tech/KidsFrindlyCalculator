// ==========================
// Kids Fun Calculator
// script.js
// ==========================

let display = document.getElementById("display");
let popup = document.getElementById("popup");
let clickSound = document.getElementById("click");
let successSound = document.getElementById("success");

// Button Click Sound
function playClick() {

    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
    }

}

// Add Value
function append(value) {

    playClick();

    display.value += value;

}

// Clear Display
function clearDisplay() {

    playClick();

    display.value = "";

}

// Delete Last Value
function deleteValue() {

    playClick();

    display.value = display.value.slice(0, -1);

}

// Calculate
function calculate() {

    playClick();

    try {

        let result = eval(display.value);

        display.value = result;

        showPopup();

        if (successSound) {

            successSound.currentTime = 0;
            successSound.play();

        }

        celebrate();

    }

    catch {

        display.value = "Error";

    }

}

// Popup
function showPopup() {

    popup.style.display = "block";

    setTimeout(function () {

        popup.style.display = "none";

    }, 2000);

}

// Keyboard Support
document.addEventListener("keydown", function (event) {

    let key = event.key;

    if (!isNaN(key) || key == "." || key == "+" || key == "-" || key == "*" || key == "/" || key == "%") {

        display.value += key;

    }

    else if (key == "Enter") {

        calculate();

    }

    else if (key == "Backspace") {

        deleteValue();

    }

    else if (key == "Escape") {

        clearDisplay();

    }

});

// Confetti Celebration
function celebrate() {

    for (let i = 0; i < 30; i++) {

        let emoji = document.createElement("div");

        emoji.innerHTML = ["🎉", "⭐", "🌈", "🎈", "🦄", "🐼", "🎁"][Math.floor(Math.random() * 7)];

        emoji.style.position = "fixed";

        emoji.style.left = Math.random() * window.innerWidth + "px";

        emoji.style.top = "-50px";

        emoji.style.fontSize = (25 + Math.random() * 30) + "px";

        emoji.style.zIndex = "9999";

        emoji.style.transition = "4s linear";

        document.body.appendChild(emoji);

        setTimeout(() => {

            emoji.style.top = window.innerHeight + "px";
            emoji.style.transform = "rotate(720deg)";

        }, 50);

        setTimeout(() => {

            emoji.remove();

        }, 4000);

    }

}

// Welcome Animation
window.onload = function () {

    showPopup();

    popup.innerHTML = " ";

};