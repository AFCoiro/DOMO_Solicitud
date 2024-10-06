/*
-sumar al carrito con el click
-hacer un loading cuando se manda el formulario (en lugar del boton)
*/
const myForm = document.querySelector(".my-form");
const myBtnForm = document.querySelector(".myBtn-form");
const myInputs = document.querySelectorAll(".my-input");
let nombre = myInputs[0].value;
let email = myInputs[1].value;
let textArea = myInputs[2].value; 

const mySpinner = document.querySelector(".my-spinner");
const confirmMsj = document.querySelector(".confirm-msj");

class Usuarios {
    constructor(id,nombre,email,msj){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.msj = msj;
    }
}
const arrayUsuarios = [];

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    myBtnForm.style.display = "none";
    mySpinner.style.display = "block";

    setTimeout(() => {

        let usuarioClave = "Usuario" + arrayUsuarios.length;
        let usuarioJson = new Usuarios(
            arrayUsuarios.length, 
            myInputs[0].value, 
            myInputs[1].value, 
            myInputs[2].value
        );

        // Guardar el usuario en localStorage
        localStorage.setItem(usuarioClave, JSON.stringify(usuarioJson));

        // Obtener el usuario desde localStorage
        let clienteString = localStorage.getItem(usuarioClave);
        arrayUsuarios.push(JSON.parse(clienteString));

        // Mostrar mensaje con los datos guardados
        confirmMsj.innerHTML = `Message sent to ${usuarioJson.email} . We will be in contact soon ${usuarioJson.nombre}.
        `;
        confirmMsj.style.display = "block"; 
        mySpinner.style.display = "none";  
    }, 2000); 

    console.log(`Nuevo usuario registrado: ${clienteString}`);
    myForm.reset();
})



/*function for the footer dropdown section. */

const aboutTitle = document.querySelector('.about-title');
const dropDownSection = document.querySelector('.dropDown-sec');

aboutTitle.addEventListener('click', function() {
    
    if (dropDownSection.style.display === "block") {
      dropDownSection.style.display = "none";
      dropDownSection.classList.remove('active');
      aboutTitle.classList.remove('active');
    } else {
      dropDownSection.style.display = "block";
      
      setTimeout(() => {
        dropDownSection.classList.add('active');
        
        setTimeout(() => {
          dropDownSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);  
      }, 20);  
  
      aboutTitle.classList.add('active');
    }
  });
  