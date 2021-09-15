const userName = document.querySelector("#username")
const btnUser = document.querySelector(".icon-down");
const div = document.querySelector(".timer--opacity");
const firstDiv = document.querySelector(".no--opacity");
const container1 = document.querySelector("#container-1");
const container2 = document.querySelector("#container-2");
const firstNumber = document.querySelector("#first-number");
const lastNumber = document.querySelector("#last-number");

/*ANIMACION USUARIO*/
userName.addEventListener("click" , e=>{
    e.preventDefault();
    if(btnUser.classList.contains("icon-down")){
        btnUser.classList.remove("icon-down")
        btnUser.classList.add("icon-transform");
    }else{
        btnUser.classList.remove("icon-transform")
        btnUser.classList.add("icon-down");
        }    
    })

    /*ANIMACION TIMER */
    const iconTime = document.querySelectorAll(".time-icon");
        iconTime.forEach(icon =>{
            icon.addEventListener("click" , () =>{
                container1.classList.toggle("order1");
                if(container1.classList.contains("disabled")){
                    container1.classList.remove("disabled");
                    container1.classList.remove("timer-container--max-width");
                    lastNumber.classList.remove("first-time");
                    container2.classList.add("disabled");
                    firstNumber.classList.add("first-time");
                    container2.classList.add("timer-container--max-width");
                }else{
                    firstNumber.classList.remove("first-time");
                    container2.classList.remove("disabled")
                    container2.classList.remove("timer-container--max-width");
                    container1.classList.add("disabled");
                    container1.classList.add("timer-container--max-width");
                    lastNumber.classList.add("first-time");
                }
            })
        })
        

