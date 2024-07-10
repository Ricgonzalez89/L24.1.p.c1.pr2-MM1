/*2. Conociendo los resultados de varios juegos de tu equipo de fútbol favorito, donde 1 es ganar y
|*   0 es perder, hacer un programa que indique porcentaje de juegos que ganaste.
|*   Ej.: Resultados de 6 juegos: 1, 1, 0, 1, 0, 1, 1.
|*   Salida: Ganaste el 66.67% de los juegos.
*/
import Cl_juego from "./Cl_juego.js";
import Cl_admin from "./Cl_admin.js";

let juego1 = new Cl_juego(1);
let juego2 = new Cl_juego(1);
let juego3 = new Cl_juego(0);
let juego4 = new Cl_juego(1);
let juego5 = new Cl_juego(0);
let juego6 = new Cl_juego(1);
let juego7 = new Cl_juego(1);
let admin = new Cl_admin();

admin.procesarJuego(juego1);
admin.procesarJuego(juego2);
admin.procesarJuego(juego3);
admin.procesarJuego(juego4);
admin.procesarJuego(juego5);
admin.procesarJuego(juego6);
admin.procesarJuego(juego7);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Ganaste el ${admin.calcPorcentajeVictoria().toFixed(2)}% de los juegos.
`;