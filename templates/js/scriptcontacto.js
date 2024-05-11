const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
    nombre: /^[\w\s]{4,30}$/,
    apellido: /^[/^[\w\s]{4,30}$/,
    telefono: /^\d{10,14}$/,
    correo: /^[\w\d._%+-]+@[\w\d.-]+\.[\w\d]{2,}$/,
    dni: /^[\d]{1,3}.?[\d]{3,3}.?[\d]{3,3}$/ //puede ser utilizado para validar el dni con y sin puntos
}

const inputs_success ={
    nombre:false,
    apellido:false,
    telefono:false,
    correo:false,
    dni:false
}


const validate = (e) => {


    if (expresiones.hasOwnProperty(e.target.name)){

        let grupo = "grupo_" + e.target.name;
        
        if (expresiones[e.target.name].test(e.target.value)) {
            document.getElementById(grupo).classList.remove("form_group-error");
            document.getElementById(grupo).classList.add("form_group-success");
            document.querySelector(`#${grupo} i`).classList.remove("fa-circle-xmark");
            document.querySelector(`#${grupo} i`).classList.add("fa-circle-check");
            document.querySelector(`#${grupo} .error_input_form`).classList.remove("error_input_form-active");
            inputs_success[e.target.name]=true;
    
    
        } else {
            document.getElementById(grupo).classList.add("form_group-error");
            document.getElementById(grupo).classList.remove("form_group-success");
            document.querySelector(`#${grupo} i`).classList.remove("fa-circle-check");
            document.querySelector(`#${grupo} i`).classList.add("fa-circle-xmark");
            document.querySelector(`#${grupo} .error_input_form`).classList.add("error_input_form-active");
            inputs_success[e.target.name]=false;
    
        }


    }

    
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validate);
    input.addEventListener('blur', validate);
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  
     
    const check_box = document.getElementById("novedades")
    const valores = Object.values(inputs_success);
    complete=valores.every(estado=> estado === true)

    


    if (complete && check_box.checked){
        
        formulario.reset();
        document.getElementById("form_exito").classList.add("form__exito-active")
        document.getElementById("form_mensaje").classList.remove("form_mensaje-active")
        document.querySelectorAll(".form_group-success").forEach( (icon) => {
            icon.classList.remove("form_group-success")
           
        })
        setTimeout(() => {
            document.getElementById("form_exito").classList.remove("form__exito-active")
        },5000)
    }else{
        document.getElementById("form_mensaje").classList.add("form_mensaje-active")
    }
})