const btn = document.querySelector("button");
const settings = document.querySelector(".settings-window")
const p = document.querySelector("p");
btn.addEventListener("click", () => {
    settings.classList.toggle("settings-show")
})
settings.addEventListener("click", (e) => {
    if (e.target != settings) {
        const img = e.target.getAttribute("src");
        document.body.style.backgroundImage = `url("${img}")`

    }
})
setInterval(() => {
    let date = new Date()
    p.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 300)