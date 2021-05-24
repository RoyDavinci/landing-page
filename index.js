const buttonBar = document.querySelector(".bars")
const buttonTimes = document.querySelector(".times")
const menuList = document.querySelector(".list")
const downButton = document.querySelectorAll(".down")

buttonBar.addEventListener("click", function(){
    buttonTimes.classList.remove("hide")
    buttonBar.classList.add("hide")
    menuList.classList.remove("hide")
})

buttonTimes.addEventListener("click", function(){
    buttonTimes.classList.add("hide")
    buttonBar.classList.remove("hide")
    menuList.classList.add("hide")
})

downButton.forEach((button) => {
    button.addEventListener("click", function(e){
        const btnParent = e.parentElement
        console.log(btnParent)
    })
})