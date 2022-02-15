const corazon = document.querySelectorAll(".highlight-prod")


corazon.forEach(elemento => {
    let contador = 0
    elemento.addEventListener("click",(e) => {   console.log(contador) 
        if(contador % 2 == 0){
            elemento.querySelector(".highlight-prod i").classList.remove("far")
            elemento.querySelector(".highlight-prod i").classList.add("fas")
            contador+=1
        }else{
            elemento.querySelector(".highlight-prod i").classList.remove("fas")
            elemento.querySelector(".highlight-prod i").classList.add("far")
            contador-=1
            }
        })

})

