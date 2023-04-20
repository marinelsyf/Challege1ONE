const textAreaMessage = document.getElementById("texto-original");
const textAreaCrypted = document.getElementById("texto-encriptado");
const emptyAlert = document.querySelector(".empty-alert");
var clave = 3; 


function encriptar() {
  mensaje = document.getElementById("texto-original").value;
  var  mensajeEncriptado= "";
  
 
    for (var i = 0; i < mensaje.length; i++) {
    
      var codigo = mensaje.charCodeAt(i);
  
   
      var cifrado = String.fromCharCode(codigo + clave);
  
     
      mensajeEncriptado += cifrado;
    }
    
    textAreaCrypted.value = mensajeEncriptado;
    textAreaMessage.value = "";
   
    return mensajeEncriptado;
  }

function desencriptar() {
  mensaje = document.getElementById("texto-original").value;
  var  mensajeDesencriptado= "";

  for (var i = 0; i < mensaje.length; i++) {
    var codigo = mensaje.charCodeAt(i);
    var descifrado = String.fromCharCode(codigo - clave);
    mensajeDesencriptado += descifrado;

    }
    textAreaCrypted.value = mensajeDesencriptado;
    textAreaMessage.value = "";
    
  } 

function borrar()  {
 
  textAreaMessage.value = "";
  textAreaCrypted.value = "";
  
};

function copiar() {
  mensaje ="";
  mensaje = textAreaCrypted.value;
  navigator.clipboard.writeText(mensaje);
  textAreaMessage.value = mensaje;
  textAreaCrypted.value = "";
  

  };