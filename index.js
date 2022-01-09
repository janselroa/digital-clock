const btn = document.querySelector("button");
const settings = document.querySelector(".settings-window")
const p = document.querySelector("p");
const p2 = document.querySelector(".date");
if (localStorage.getItem("background") != null) {
    document.body.style.backgroundImage = localStorage.getItem("background")
}

btn.addEventListener("click", () => {
    settings.classList.toggle("settings-show")
})
settings.addEventListener("click", (e) => {
    if (e.target != settings) {
        const img = e.target.getAttribute("src");
        document.body.style.backgroundImage = `url("${img}")`
        localStorage.setItem("background", `url("${img}")`)
    }
})

const daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"

]
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
setInterval(() => {
    let date = new Date()
    p.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    p2.textContent = `${daysWeek[date.getDay()]}, ${date.getDate()} ${Months[date.getMonth()]} ${date.getFullYear()}`
}, 300)