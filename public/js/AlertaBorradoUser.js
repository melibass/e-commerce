const formBorrado = document.querySelector(".borrado")
const usuario = document.querySelector(".borrado").getAttribute("user")


   
formBorrado.addEventListener("submit", (e) => {
    e.preventDefault()
    Swal.fire({
        title: `Estas seguro ${usuario}?`,
        text: "No podes revertir esta acción y tus datos se borrarán para siempre",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#81B29A',
        cancelButtonColor: '#E07A5F',
        confirmButtonText: 'Si, BORRAR!',
        cancelButtonText: 'Atras'       
      }).then((result) => {
        if (result.isConfirmed) {     
          Swal.fire(
            'Borrado!',
            `El usuario ${usuario} se borro de la base.`,
            'success'
          )
          formBorrado.submit()          
        } 
      })
    
});

