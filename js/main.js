/*Dado el nombre, sexo (F-M) y el ingreso de varias personas. Determinar e imprimir: promedio 
de ingreso de las mujeres, el monto de ingreso mayor y quien lo tiene. 
Se dispone de los siguientes datos de varias personas: (nombre, sexo, ingreso) (Mary, F, 
150), (José, M, 135), (Carlos, M, 160), (Pedro, M, 75), (Rosa, F, 120), (Carmen, F, 120) */

import Persona from "./Persona.js";
import TodoPersona from "./TodoPersona.js";

let per1 = new Persona("Mary", "F", 150);
let per2 = new Persona("José", "M", 135);
let per3 = new Persona("Carlos", "M", 160);
let per4 = new Persona("Pedro", "M", 75);
let per5 = new Persona("Rosa", "F", 120);
let per6 = new Persona("Carmen", "F", 120);

let todopersona = new TodoPersona();

todopersona.procesarPersona(per1);
todopersona.procesarPersona(per2);
todopersona.procesarPersona(per3);
todopersona.procesarPersona(per4);
todopersona.procesarPersona(per5);
todopersona.procesarPersona(per6);

let salida = document.getElementById("Salida");
salida.innerHTML = `A continuación se mostrarán los resultados: <br><br>`;
salida.innerHTML += `Promedio de ingreso de las mujeres: ${todopersona.calcPromFem()}`;
salida.innerHTML += `<br>Nombre de la persona con mayor ingreso: ${todopersona.devolverMayorNom()} con un ingreso de $${todopersona.devolverMayorIng()}`;
