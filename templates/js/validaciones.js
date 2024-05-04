document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    // V: de Nombre y Apellido
    const validateName = (name) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\.'-]+$/.test(name);
    
    // V: de Telefono
    const validatePhone = (phone) => /^\d{10}$/.test(phone);  // Ejemplo para un formato de 10 dígitos

    // V: de Email
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    };

    // Función de v completa
    const validateForm = () => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const numero = document.getElementById('numero').value;
        const email = document.getElementById('email').value;

        // Verificar cada campo
        if (!validateName(nombre)) {
            alert('Por favor, ingresa un nombre válido.');
            return false;
        }
        if (!validateName(apellido)) {
            alert('Por favor, ingresa un apellido válido.');
            return false;
        }
        if (!validatePhone(numero)) {
            alert('Por favor, ingresa un número de teléfono válido.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Por favor, ingresa un email válido.');
            return false;
        }

        // Todos los campos son validos
        return true;
    };

    // Evento de send-form
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();  // Prevenir el envio del formulario si la validacion falla
        }
    });

    // Eventos: validacion en tiempo real
    document.getElementById('nombre').addEventListener('input', function() {
        if (!validateName(this.value)) {
            this.classList.add('invalid');
        } else {
            this.classList.remove('invalid');
        }
    });

    document.getElementById('apellido').addEventListener('input', function() {
        if (!validateName(this.value)) {
            this.classList.add('invalid');
        } else {
            this.classList.remove('invalid');
        }
    });

    document.getElementById('numero').addEventListener('input', function() {
        if (!validatePhone(this.value)) {
            this.classList.add('invalid');
        } else {
            this.classList.remove('invalid');
        }
    });

    document.getElementById('email').addEventListener('input', function() {
        if (!validateEmail(this.value)) {
            this.classList.add('invalid');
        } else {
            this.classList.remove('invalid');
        }
    });

});
