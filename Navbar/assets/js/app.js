// Selection All of Links 
var links = document.querySelectorAll(".primary-menu a");

links.forEach(e = (e) => {
    e.addEventListener("click", function () {
        const parent = e.parentElement;
        parent.querySelector("ul").classList.toggle("showMenu");
        links.forEach(items = (items) => {
            if (e !== items) {
                items.querySelector("ul").classList.remove("showMenu");
            }
        })
    })
})


document.querySelector(".humberger").onclick = function () {
    document.querySelector(".primary-menu").classList.toggle("showMobileMenu");
    document.querySelector(".humberger").classList.toggle("active");
}