let harina = " 500gr de harina";
let peperoni = " 200gr de peperoni";
let queso = " 200gr queso mozzarella ";
let olivas = " Olivas negras al gusto";
let salsa = " Salsa de tomate para pizza";

function app() {
    console.log(" Pizza peperoni");
    precalentar();
    hacerMasa();
    añadirIngredientes();
    hornear();
    sacar();
    entrega();
}

function hacerMasa() {
    console.log(" Añadir " + harina + " al resto de los ingredientes de la masa");
    console.log(" Amasar");
    console.log(" Resopar y dar forma");
}

function añadirIngredientes() {
    console.log(" Añadir los ingredientes en el siguinte orden  " + salsa + queso + peperoni + olivas);
}

function precalentar(){
    console.log (" Precalentar el horno ");
}

function hornear(){
    console.log (" Hornear");
}
function sacar(){
    console.log (" Sacar del horno ");
}

function entrega(){
    console.log (" Entregar al cliente ");
}

app();