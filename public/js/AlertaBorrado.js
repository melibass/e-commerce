const formBorrado = document.querySelectorAll(".borrado")


formBorrado.forEach(elemento => {    
    elemento.addEventListener("submit", (e) => {
    e.preventDefault()
    Swal.fire({
        title: 'Estas seguro?',
        text: "No podes revertir esta acción!",
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
            'El archivo se borro de la base.',
            'success'
          )
          elemento.submit()          
        } 
      })
    
});
});
