/*
Necesito armar una función que habilite el escript. Esa función voy a hacer que se active cuando el usuario ponga click en submit.
Luego tengo que ir validando los campos

*/

/*  El proceso general del script es este.
    Se inicia el evento cuando el usuario hace click en submit en el html.
    Partimos de una variable que tiene un valor booleano true. Siempre y cuando se 
    mantenga en true, se validan los datos y el envío sigue.
    Si hay algun validación que falle, la primera variable se convierte en false y
    se "rompe" todo el envío.
    Todas las validaciones, menos el captcha, necesitan dos variables. Una que recupere
    los datos ingresados por el usuario. Otra en la que guardamos la respuesta al usuario.
    Al final de todo pongo el prevent que rompe el envío si falla la validación.

*/

function validar (event) {

let funciona_bien = true;

//Validación del nombre

let nombre_ingresado;
let respuesta_nombre;
nombre_ingresado = document.getElementById ("nombre").value.trim(); //.trim sirve para eliminar caracteres vacíos
if (nombre_ingresado.length == 0) {
    respuesta_nombre = "Debe ingresar su nombre y su apellido";
    funciona_bien = false;
} else if (nombre_ingresado.length < 3) {
    respuesta_nombre = "El nombre es demasiado corto como para ser válido";
    funciona_bien = false;
} 
else {
    respuesta_nombre = "Nombre válido";
    }
document.getElementById ("nombre_válido").textContent = respuesta_nombre ;
console.log (respuesta_nombre);

//Validación del mail
let mail_ingresado;
let respuesta_correo;
let mail = document.getElementById("email");
mail_ingresado = document.getElementById ("email").value.trim();
if (mail_ingresado.length == 0) {
    respuesta_correo = "Debe ingresar un correo válido";
    funciona_bien = false;
} else if (!mail.validity.valid) {
    respuesta_correo = "El formato del correo no es válido";
    funciona_bien = false;
} 
else {
    respuesta_correo = "Correo válido";
}
document.getElementById ("email_válido").textContent = respuesta_correo ;
console.log (respuesta_correo);

//Validación del correo
let password_ingresado;
let respuesta_password;
password_ingresado = document.getElementById ("password").value;
if (password_ingresado.length == 0) {
    respuesta_password = "Debe ingresar una contraseña";
    funciona_bien = false;
} else if (password_ingresado.length < 10) {
    respuesta_password = "La contraseña es demasiado corta como para ser válida";
    funciona_bien = false;
}  else if (!/[A-Z]/.test(password_ingresado)) {
    respuesta_password = "Debe incluir al menos una mayúscula";
    funciona_bien = false;
} else if (!/[0-9]/.test(password_ingresado)) {
    respuesta_password = "Debe incluir al menos un número";
    funciona_bien = false;
}  else {
    respuesta_password = "Contraseña válida";
}

document.getElementById ("password_válido").textContent = respuesta_password ;
console.log (respuesta_password);

/*Validación del captcha
Don GPT me dijo que hay que usar grecaptcha debido al captcha de google que linkeó
Fabri en el html.  */

if (grecaptcha.getResponse() == "") {
    funciona_bien = false;
}

//Comprobación final. Si alguna cosa se volvió false se cancela todo el envío.
if (funciona_bien == false) {
    event.preventDefault();
}

}