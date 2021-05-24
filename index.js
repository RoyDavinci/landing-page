const buttonBar = document.querySelector(".bars")
const buttonTimes = document.querySelector(".times")
const menuList = document.querySelector(".list-items")
const downButton = document.querySelectorAll(".down")
const upButton = document.querySelectorAll(".up")

buttonBar.addEventListener("click", function(){
    buttonTimes.classList.remove("hide")
    buttonBar.classList.add("hide")
    menuList.style.display = "block"
})

buttonTimes.addEventListener("click", function(){
    buttonTimes.classList.add("hide")
    buttonBar.classList.remove("hide")
    menuList.style.display ="none"
})

downButton.forEach((button) => {
    button.addEventListener("click", function(e){
        const btnParent = button.parentElement.parentElement;
        const curTarget = e.currentTarget.parentElement.parentElement
        upButton.forEach((upBtn) => {
            if(upBtn.parentElement.parentElement === btnParent){
                upBtn.classList.remove('hide')
                button.classList.add("hide")
            }
        })
        console.log(curTarget)
        btnParent.children[1].classList.remove("hide")
    })
})
upButton.forEach((btn) => {
    btn.addEventListener("click", function(e){
        const btnParent = btn.parentElement.parentElement
        downButton.forEach((downBtn) => {
            if(downBtn.parentElement.parentElement === btnParent){
                downBtn.classList.remove("hide")
                btn.classList.add("hide")
            }
        })
        btnParent.children[1].classList.add("hide")
    })
})