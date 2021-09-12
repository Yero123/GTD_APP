const btnUser = document.querySelector(".icon-down");
const div = document.querySelector(".timer--opacity");
const firstDiv = document.querySelector(".no--opacity")
btnUser.addEventListener("click" , e=>{
    e.preventDefault();
    if(btnUser.classList.contains("icon-down")){
        btnUser.classList.remove("icon-down")
        btnUser.classList.add("icon-transform");
    }else{
        btnUser.classList.remove("icon-transform")
        btnUser.classList.add("icon-down");
    }    
})

const iconTime = document.querySelectorAll(".time-icon");
    iconTime.forEach(icon =>{
        icon.addEventListener("click" , () =>{
            if(icon.parentElement.parentElement.parentElement.classList.contains("flex-reverse")){
                icon.parentElement.parentElement.parentElement.classList.remove("flex-reverse");   
                firstDiv.classList.remove("timer--opacity")             
            }else{
                icon.parentElement.parentElement.parentElement.classList.add("flex-reverse");
                div.classList.remove("timer--opacity");
                firstDiv.classList.add("timer--opacity")
            }
        })
    })
    

