
//Form sends the user information to local storage and stores it in an array.
const myForm = document.querySelector(".my-form");
const myBtnForm = document.querySelector(".myBtn-form");
const myInputs = document.querySelectorAll(".my-input");

const mySpinner = document.querySelector(".my-spinner");
const confirmMsj = document.querySelector(".confirm-msj");
const myCart = document.querySelector(".my-cart");

let nombre = myInputs[0].value;
let email = myInputs[1].value;
let textArea = myInputs[2].value;

class Usuarios {
    constructor(id, nombre, email, msj) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.msj = msj;
    }
}

// Retrieve the current ID from localStorage or start it at 1 and populate the Cart
let usuarioId = localStorage.getItem("usuarioId") ? parseInt(localStorage.getItem("usuarioId")) : 1;
myCart.innerHTML = `Cart [${usuarioId}]`;

const arrayUsuarios = [];

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    nombre = myInputs[0].value;
    email = myInputs[1].value;
    textArea = myInputs[2].value;

    myBtnForm.style.display = "none";
    mySpinner.style.display = "flex";

    setTimeout(() => {
        mySpinner.style.display = "none";
        confirmMsj.style.display = "block";


        let usuarioJson = new Usuarios(
            usuarioId,  
            nombre,     
            email, 
            textArea
        );

        let usuarioClave = "Usuario" + usuarioId;
        localStorage.setItem(usuarioClave, JSON.stringify(usuarioJson));

        usuarioId++;
        localStorage.setItem("usuarioId", usuarioId); 
        let clienteString = localStorage.getItem(usuarioClave);
        arrayUsuarios.push(JSON.parse(clienteString));

        confirmMsj.innerHTML = `✓ Message sent to ${usuarioJson.email}. We will be in contact soon, ${usuarioJson.nombre}.`;
        myCart.innerHTML = `Cart [${usuarioJson.id}]`;

        console.log(`Nuevo usuario registrado: ${clienteString}`);


    }, 2000); 
});



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
  