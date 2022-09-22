/* Desenvolva a lógica da página aqui */

let controllersModal = document.querySelectorAll("[data-control-modal]")

for(let index = 0; index < controllersModal.length; index++){
    controllersModal[index].addEventListener("click", ()=>{
        let modalId = controllersModal[index].getAttribute("data-control-modal")
        document.getElementById(modalId).classList.toggle("show-modal")
    })
}

let controlButtonLike = document.querySelector(".btn-like")
let controlButtonLikeImg = document.querySelector(".btn-like-img")
let heartHover = false
controlButtonLike.addEventListener("click", function(event){
    
    if(heartHover){
        controlButtonLikeImg.src="../../assets/img/heart.svg"
        heartHover=false
    }else{
        controlButtonLikeImg.src="../../assets/img/heart-hover.svg"
        heartHover=true
    }
})


