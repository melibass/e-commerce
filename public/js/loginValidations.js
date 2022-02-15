let form=qs("#login");
let ojito=qs("#ojo");
let pass=qs("#password"); 
const regexEmail=  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ //  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let spanemail=qs("#correo");
let spanpassword=qs("#contraseña");
let input=qs("#email");

form.addEventListener("submit",function(e){

    e.preventDefault();
    let error={};

        /*campo email*/
    if(form.email.value.length == 0){  
        error.email='El campo del email no debe estar vacio';
        spanemail.style.fontStyle ='italic';
        qs("#correo").innerText=error.email;
    }else if(!regexEmail.test(form.email.value)){
        error.email='tiene que ser un email valido'
        qs("#correo").innerText=error.email;
    }


    /*campo del passwoerd*/

    /*validaciones del password*/
    if (form.password.value.length == 0){
        error.password='El campo del password no debe estar vacio'
        spanpassword.style.fontStyle ='italic';
        qs("#contraseña").innerText=error.password;
    }else if(form.password.value.length <8){
        error.password='El campo del password contener 8 caracteres y un numero';
        qs("#contraseña").innerText=error.password;
    }


    if(Object.keys(error).length ==0){
        form.submit();
    }


});   


document.querySelector('#ojo').style.color='caparol';


    /*funcion del ojo de la contraseña*/
ojo.addEventListener("click",function(e){
    if(pass.type == 'password'){
        ojo.classList.remove('fa-eye-slash');
        ojo.classList.add('fa-eye');
        pass.type = 'text';
    }else{
        ojo.classList.remove('fa-eye');
        ojo.classList.add('fa-eye-slash');  
        pass.type = 'password';
    }
});


