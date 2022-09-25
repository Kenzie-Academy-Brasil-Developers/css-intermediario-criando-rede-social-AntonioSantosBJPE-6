/* Desenvolva a lógica da página aqui */


function createCardProfile (idFather,id){
    
    let name =""
    let profile =""
    let img =""
    
    for (let i=0; i < users.length; i++){
        if (users[i].id === id){
            name = users[i].user
            profile = users[i].stack
            img = users[i].img
        }
    }

    let divContainer = document.getElementById(idFather)
    
    let divCardProfile = document.createElement("div")
    divContainer.appendChild(divCardProfile)
    divCardProfile.classList="card-profile flex"

        let divBoxInternalLeft = document.createElement("div")
        divCardProfile.appendChild(divBoxInternalLeft)
        divBoxInternalLeft.classList="card-profile-box-internal-left flex items-center"

            let imgUser = document.createElement("img")
                imgUser.src= img
                divBoxInternalLeft.appendChild(imgUser)

            let divBoxInternalLeftInternal = document.createElement("div")
            divBoxInternalLeft.appendChild(divBoxInternalLeftInternal)
            divBoxInternalLeftInternal.classList="card-profile-box-internal-left-internal flex flex-col items-start"

                let h3NameProfile = document.createElement("h3")
                    h3NameProfile.innerText= name
                    divBoxInternalLeftInternal.appendChild(h3NameProfile)
                    h3NameProfile.classList = "font-title2 txt-color-grey-1"

                let pQualification = document.createElement("p")
                    pQualification.innerText= profile
                    divBoxInternalLeftInternal.appendChild(pQualification)
                    pQualification.classList = "font-text2 txt-color-grey-2"

        let divBoxInternalRight = document.createElement("div")
            divCardProfile.appendChild(divBoxInternalRight)
            divBoxInternalRight.classList = "card-profile-box-internal-right flex items-center justify-end"

            let buttonFollow = document.createElement("button")
                buttonFollow.innerText="Seguir"
                divBoxInternalRight.appendChild(buttonFollow)
                buttonFollow.classList = "width-btn-small height-btn-small border-slin-color-grey1 border-radius-2 bg-color-transparent font-text2 btn-outline-medium btn-follower"

}

function createAssideFollowerSuggestion (){
    let idcontainer = "container-card-profile"

    for (let index=0; index < sugestUsers.length; index++){
        createCardProfile(idcontainer,sugestUsers[index])
    }
}

function createCardPost (idFather, idProfile, idPost , positionPostArray){


    let divContainer = document.getElementById(idFather)
    
        let liCardPost = document.createElement("li")
        divContainer.appendChild(liCardPost)
        liCardPost.id="card-post"+idPost
        liCardPost.classList = "card-post flex flex-col"

            createCardProfile (liCardPost.id,idProfile)
            liCardPost.children[0].children[1].remove()


            let h2 = document.createElement("h2")
            h2.innerText = posts[positionPostArray].title 
            h2.classList = "font-title1 txt-color-grey-1 text-align-justify"
            liCardPost.appendChild(h2)

            let p = document.createElement("p")
            p.innerText = posts[positionPostArray].text.slice(0,150) + " ..."
            p.classList = "font-text1 txt-color-grey-2 text-align-justify"
            liCardPost.appendChild(p)

            let divContainerBtn = document.createElement("div")
            liCardPost.appendChild(divContainerBtn)
            divContainerBtn.classList ="card-post-container-buttons flex"

                let btnOpenPost = document.createElement("button")
                btnOpenPost.innerText= "Abrir Post"
                btnOpenPost.classList = "width-btn-medium height-btn-medium font-text2 bg-color-grey-1 txt-color-white-fixed border-none border-radius-1 btn-grey1"
                divContainerBtn.appendChild(btnOpenPost)
                 btnOpenPost.setAttribute("data-control-modal",`modal-post${idPost}`)
                btnOpenPost.value = idPost

                let containerBtnInternal = document.createElement("div")
                containerBtnInternal.classList = "card-post-container-buttons-internal flex"
                divContainerBtn.appendChild(containerBtnInternal)

                    let btnLike = document.createElement("button")
                    btnLike.classList = "btn-like"
                    containerBtnInternal.appendChild(btnLike)

                        let imgLike = document.createElement("img")
                        imgLike.src = "assets/img/heart.svg"
                        imgLike.classList = "btn-like-img"
                        btnLike.appendChild(imgLike)
        
                        let pContLikes = document.createElement("p")
                        btnLike.appendChild(pContLikes)
                        pContLikes.innerText = "0"
                        pContLikes.classList = "font-text3 txt-color-grey-2 counter-like"

}

function createListPosts (){
    
    let idcontainer = "list-posts"  

    for (let index=0; index < posts.length; index++){
        createCardPost(idcontainer,posts[index].user,posts[index].id_post,index)
    }
}

function createModalPost (idProfile, idPost , positionPostArray){


    let containerModal = document.querySelector(".modal-wrapper")
    containerModal.id="modal-post"+idPost

        let modal = document.createElement("div")
        containerModal.appendChild(modal)
        modal.classList = "modal"
        modal.id = "modal"


            let modalHeader = document.createElement("div")
            modal.appendChild(modalHeader)
            modalHeader.classList = "modal-header flex justify-between items-center"
            modalHeader.id = "modal-header"+idPost
                
                createCardProfile (modalHeader.id,idProfile)
                modalHeader.children[0].children[1].remove()

                let btnCloseModal = document.createElement("button")
                btnCloseModal.innerText= "X"
                btnCloseModal.classList = "btn-modal-close"
                modalHeader.appendChild(btnCloseModal)
                btnCloseModal.setAttribute("data-control-modal",containerModal.id)
                btnCloseModal.value = idPost
                btnCloseModal.id = "modal-close"

            let modalBody = document.createElement("div")
            modal.appendChild(modalBody)
            modalBody.classList ="modal-body flex flex-col"     
            
                let h2 = document.createElement("h2")
                h2.innerText = posts[positionPostArray].title 
                h2.classList = "font-title1 txt-color-grey-1 text-align-justify"
                modalBody.appendChild(h2)

                let p = document.createElement("p")
                p.innerHTML = posts[positionPostArray].text
                p.classList = "font-text1 txt-color-grey-2 text-align-justify"
                modalBody.appendChild(p)          

}

function createEventLikeDeslike () {
    let controlButtonLike = document.querySelectorAll(".btn-like")
    let controlButtonLikeImg = document.querySelectorAll(".btn-like-img")
    let likes = document.querySelectorAll(".counter-like")
    
     let heartHover = false
    
     for (let i=0; i < controlButtonLike.length; i++){
        let heartHover = false
        let counterLike = 0
        controlButtonLike[i].addEventListener("click", function(){
            
             if(heartHover){
                    controlButtonLikeImg[i].src="assets/img/heart.svg"
                    heartHover=false
                    counterLike--
                    likes[i].innerText = counterLike
                }else{
                    controlButtonLikeImg[i].src="assets/img/heart-hover.svg"
                    heartHover=true
                    counterLike++
                    likes[i].innerText = counterLike
                }
         })
     }
}


function createEventOpenCloseModal (){
    let controllersModal = document.querySelectorAll("[data-control-modal]")
    let idUserPost =0
    let idPost = 0
    let positionPostArray=0
    
    for(let index = 0; index < controllersModal.length; index++){
        controllersModal[index].addEventListener("click", ()=>{
            let modalId = controllersModal[index].getAttribute("data-control-modal")
        
                for (let i=0; i<posts.length; i++){
                        if (posts[i].id_post===index+1){
                            idUserPost=posts[i].user
                            idPost = posts[i].id_post
                            positionPostArray = i
                        }
                }
                
                createModalPost(idUserPost,idPost,positionPostArray)
                document.getElementById(modalId).classList.toggle("show-modal")
    
                let btnClose = document.querySelector("#modal-close")
                btnClose.addEventListener ("click", function(){
                    document.getElementById(modalId).classList.toggle("show-modal")
                    document.getElementById("modal").remove()
                })         
              
        })
    }
}

 
function createEventNewfollower (){

    let btns = document.querySelectorAll(".btn-follower")

    for (let i=0; i<btns.length; i++){
       let click = false
       btns[i].addEventListener ("click", function(){
            
        if (click){
            btns[i].innerText = "Seguir"
            btns[i].classList.toggle("bg-color-primary")
            btns[i].classList.toggle("txt-color-white-fixed")
            btns[i].classList.toggle("width-btn-medium")
            btns[i].classList.toggle("border-none1")
            btns[i].classList.toggle("btn-outline-medium")
            btns[i].classList.toggle("btn-follow")
            click=false
        } else {
            btns[i].innerText = "Seguindo"
            btns[i].classList.toggle("bg-color-primary")
            btns[i].classList.toggle("txt-color-white-fixed")
            btns[i].classList.toggle("width-btn-medium")
            btns[i].classList.toggle("border-none1")
            btns[i].classList.toggle("btn-outline-medium")
            btns[i].classList.toggle("btn-follow")
            click=true
        }
          
       })
       
    }

     
        
}


function createEventNewPost (){
    
    let btnNewPost = document.getElementById("btn-new-post")
    
    btnNewPost.addEventListener("click", function(){
        newPost()
    })

}

function newPost(){
    let userConnected = document.getElementById("user-connected")
    let userStack = document.getElementById("user-stack")
    let titlePost = document.getElementById("title-new-post")
    let textPost = document.getElementById("text-new-post")

    

    if (titlePost.value.trim()==="" || textPost.value.trim()===""){
        alert("Não é aceito um dos campos vazios")
    }else{
     
        for (let index=0; index<posts.length; index++){
            posts[index].id_post++
        }

        posts.unshift({id_post:1,user:3,title:titlePost.value.trim(),text:textPost.value.trim()})
        titlePost.value = ""
        textPost.value = ""

        let ul = document.querySelectorAll(".card-post")
        
            for (let index=0; index<ul.length; index++){
                ul[index].remove()
            }
       
        createListPosts ()
        createEventOpenCloseModal ()
        createEventLikeDeslike ()
    }

}


createListPosts()
createAssideFollowerSuggestion()
createEventOpenCloseModal()
createEventLikeDeslike()
createEventNewfollower()
createEventNewPost()

// =============================================================




