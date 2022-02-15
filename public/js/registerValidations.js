
let form=qs("#registro");
let ojito=qs("#ojito");
let contraseña=qs("#password"); 
const regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let spanNombre=qs("#name");
let spanApellido=qs("#lastname");
let spanEmail=qs("#email");
let spanPassword=qs("#repassword");
let inputs = qsa("#avatar input") ;

const expresiones = {
	name: /^[a-zA-Z0-9\s]{5,30}$/, // Letras, numeros
	description: /^[a-zA-ZÀ-ÿ\s]{20,30}$/, // Letras y espacios, pueden llevar acentos.
	measurements:/^[a-zA-ZÀ-ÿ-0-9\s]{2,30}$/, // Letras y espacios, pueden llevar acentos.	
	price: /^[0-9]*$/, // 7 a 14 numeros.
    img: /\.(jpg|png|gif|jpeg)$/i
}

 /*validacion img*/
    
   
 const validarFormularioImg = (e) => {
    switch (e.target.name){
        case "avatar":
            if(!expresiones.img.test(e.target.files[0].name)){
                Swal.fire({
                    icon:'warning',
                    title:'Oops...',
                    text:'EL archivo no es de los permitidos!',
                    footer:'Solo acepta .png, .jpg, .jpeg .gif'
                  })
                  e.target.value = ""
                
            }
        
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener("change", validarFormularioImg)
})

/*

let inputs =document.querySelectorAll("#registro input");


const expresiones = {
	nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	corre0: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}
const campos = {
	nombre: false,
	apellido: false,
	password: false,
	correo: false,
	
}
*/
form.addEventListener("submit",function(e){
    e.preventDefault();
    let errors={};

    /*validaciones del name*/

    if (form.name.value.length == 0) {
        errors.name='El campo del nombre no debe estar vacio'
        spanNombre.style.fontStyle ='italic';
        qs("#name").innerText=errors.name;
    }else if(form.name.value.length <2){
        errors.name='El campo del Nombre debe  tener como minimo 2 caracteres'
        qs("#name").innerText=errors.name;
    }else{
        delete errors.name
    }

    /*validaciones del apellido*/
    if (form.lastname.value.length == 0) {
        errors.lastname='El campo del Apellido no debe estar vacio'
        spanApellido.style.fontStyle ='italic';
        qs("#lastname").innerText=errors.lastname;
    }else if(form.lastname.value.length <2){
        errors.lastname='El campo del Apellido debe tener como minimo 2 caracteres'
        qs("#lastname").innerText=errors.lastname;
    }else{
        delete errors.name
    }

    /*validaciones del main*/
    //console.log(regexEmail.test(form.email.value))
    if (form.email.value.length == 0){
        errors.email='El campo de email no debe estar vacio'
        spanEmail.style.fontStyle ='italic';
        qs("#email").innerText=errors.email;
    }else if(!regexEmail.test(form.email.value)){
        errors.email='Debe ser un email valido';
        qs("#email").innerText=errors.email;
    }

   

    /*validaciones del password*/
    if (form.password.value.length == 0){
        errors.password='El campo del password no debe estar vacio'
        spanPassword.style.fontStyle ='italic';
        qs("#repassword").innerText=errors.password;
    }else if(form.password.value.length <8){
        errors.password='El campo del password contener 8 alfanumericos';
        qs("#repassword").innerText=errors.password;
    }
    
    if(Object.keys(errors).length ==0){
        form.submit();
    }

});




/*

const validarFormulario =function(e) {
	switch (e.target.name) {
		case "name":
            validarCampo(expresiones.nombre,e.target,"nombre");
            break;
        case "lastname":
            validarCampo(expresiones.apellido,e.target,"apellido");
            break;    
        
    }
}

const validarCampo=function(expresion,input,campo){
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove("form-control-incorrecto");
        document.getElementById(`grupo_${campo}`).classList.add("form-control-correcto");
        document.querySelector(`#grupo_${campo} span`).classList.add("fa-check-circle");
        document.querySelector(`#grupo_${campo} span`).classList.add("exclamation-circle");
        campos[campo] = true
    }else{
        document.getElementById(`grupo_${campo}`).classList.add("form-control-incorrecto");
        document.getElementById(`grupo_${campo}`).classList.remove("form-control-correcto");
        document.querySelector(`#grupo_${campo} span`).classList.add("exclamation-circle");
        document.querySelector(`#grupo_${campo} span`).classList.remove("fa-check-circle");
        campos[campo] = false;
    }
   
    
}

inputs.forEach(function(input){
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
    

})


*/
document.querySelector('#ojito').style.color='caparol;';
/*funcion del ojo de la contraseña*/
ojito.addEventListener("click",function(e){
    if(contraseña.type == 'password'){
        ojito.classList.remove('fa-eye-slash');
        ojito.classList.add('fa-eye');
        contraseña.type = 'text';
    }else{
        ojito.classList.remove('fa-eye');
        ojito.classList.add('fa-eye-slash');  
        contraseña.type = 'password';
    }
});