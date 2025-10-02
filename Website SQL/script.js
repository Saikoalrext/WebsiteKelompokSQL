const navE1 = document.querySelector(".left_container");
const hamburgerE1 = document.querySelector(".hamburger_bar");
const toggleBtn = document.getElementById("toggle_btn");
const body = document.body;

hamburgerE1.addEventListener("click", () =>{
    navE1.classList.toggle("left_container--open")
});
toggleBtn.addEventListener("click", () =>{
    body.classList.toggle("dark-mode")

    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Light Mode";
    }
    else {
        toggleBtn.textContent = "Dark Mode";
    }
} )
document.addEventListener("click", (e) => {
    if(
        navE1.classList.contains("left_container--open") &&
        !navE1.contains(e.target) &&
        !hamburgerE1.contains(e.target)
        ){
            navE1.classList.remove("left_container--open")
        }
})