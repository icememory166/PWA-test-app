const btn = document.getElementById("btn")
const counter = document.getElementById("counter")
const img = document.getElementById("boat")

let num = 0

counter.style.display = "none"

btn.addEventListener("click", function() {
    counter.style.display = "block"
    num += 1
    counter.textContent = (`Click count is: ${num}`)
    if(num >= 5 && num < 10){
        img.src = "dist/img/cat.jpg"
    } else if (num >= 10){
        window.location.href = "airvent.html"
    }
})
