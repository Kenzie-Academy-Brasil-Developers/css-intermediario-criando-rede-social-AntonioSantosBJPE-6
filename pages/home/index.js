/* Desenvolva a lógica da página aqui */
const controllersModal = document.querySelectorAll("[data-control-modal]")


for(let index = 0; index < controllersModal.length; index++){
    controllersModal[index].addEventListener("click", ()=>{
        let modalId = controllersModal[index].getAttribute("data-control-modal")
        document.getElementById(modalId).classList.toggle("show-modal")
    })
}
