const email = document.querySelector("#email-validacion input")
let array = []
const mail = fetch("http://localhost:3001/users/list")
                    .then(mail => mail.json())
                    .then(mail => { 
                        return mail.forEach(respuesta => {
                            array.push(respuesta.email)
                        })
                    })


const validarmail =  (e) => {
   let valido = array.find(mail => mail == e.target.value)
    
        if(!valido){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `El email ${e.target.value} no esta en la base!`,
              })
              e.target.value = "Poner Email Valido"
        }
    console.log(valido)
}


email.addEventListener("change", validarmail)




