let carritoCantidad = qs(".fa-shopping-cart")
let buttons = qsa(".boton-compra")
let cart = []

if(localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"))
} 


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if(cart.indexOf(e.target.value) == -1) {
            cart.push(e.target.value)
            localStorage.setItem("cart", JSON.stringify(cart))
            carritoCantidad.innerText = cart.length
        }
    })
});