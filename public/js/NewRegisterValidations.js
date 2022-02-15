const formulario = document.getElementById("formulario-register")
const inputs = document.querySelectorAll("#formulario-register input")
let ojito=qs("#ojito");




const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras
	lastname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // email
	Password: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}/, //8 a 15 caracteres 1 min 1 mays 1 digito 1 caracter esp
    img: /\.(jpg|png|gif|jpeg)$/i
}

 /*validacion img*/
    
   
 

const validarFormulario = (e) => {
    switch (e.target.name){
        case "name":
            validarCampo(expresiones.name, e.target, "name")
        break;
        case "lastname":
            validarCampo(expresiones.lastname, e.target, "lastname")
        break;
        case "email":
            validarCampo(expresiones.email, e.target, "email")
        break;
        case "password":
            validarCampo(expresiones.Password, e.target, "password")
            validarPassword2();
        break;
        case "repassword":
            validarPassword2();
        break;
                 
    }
}

const validarFormularioImg = (e) => {
    switch (e.target.name){
        case "avatar":
            if(!expresiones.img.test(e.target.files[0].name)){
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'EL archivo no es de los permitidos!',
                    footer: 'Solo acepta .png, .jpg, .jpeg .gif',
                    confirmButtonColor: '#81B29A',
                  })
                  e.target.value = ""
                
            }
        
        break;
    }
}



const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo_incorrecto")
        document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo_correcto")
        document.querySelector(`#grupo_${campo} i`).classList.add("fa-check-circle")
        document.querySelector(`#grupo_${campo} i`).classList.remove("fa-times-circle")
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.remove("formulario_input_error_activo")
        //campos[campo]=true
    } else {
        document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo_incorrecto")
        document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo_correcto")
        document.querySelector(`#grupo_${campo} i`).classList.add("fa-times-circle")
        document.querySelector(`#grupo_${campo} i`).classList.remove("fa-check-circle")
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add("formulario_input_error_activo")
        //campos[campo]=false


    }
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo_password2`).classList.add("formulario_grupo_incorrecto")
        document.getElementById(`grupo_password2`).classList.remove("formulario_grupo_correcto")
        document.querySelector(`#grupo_password2 i`).classList.add("fa-times-circle")
        document.querySelector(`#grupo_password2 i`).classList.remove("fa-check-circle")
        document.querySelector(`#grupo_password2 .formulario_input_error`).classList.add("formulario_input_error_activo")
		//campos['password'] = false;
	} else {
		document.getElementById(`grupo_password2`).classList.remove("formulario_grupo_incorrecto")
        document.getElementById(`grupo_password2`).classList.add("formulario_grupo_correcto")
        document.querySelector(`#grupo_password2 i`).classList.remove("fa-times-circle")
        document.querySelector(`#grupo_password2 i`).classList.add("fa-check-circle")
        document.querySelector(`#grupo_password2 .formulario_input_error`).classList.remove("formulario_input_error_activo")
		//campos['password'] = true;
	}
}


inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario)
    input.addEventListener("change", validarFormularioImg);
})


document.querySelector('#ojito').style.color='caparol;';
/*funcion del ojo de la contraseña*/
ojito.addEventListener("click",function(e){
    if(password.type == 'password'){
        ojito.classList.remove('fa-eye-slash');
        ojito.classList.add('fa-eye');
        password.type = 'text';
    }else{
        ojito.classList.remove('fa-eye');
        ojito.classList.add('fa-eye-slash');  
        password.type = 'password';
    }
});

