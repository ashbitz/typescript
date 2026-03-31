import { calcularMedia } from "./math-utils";
import { calcularMediana } from "./math-utils";
import { filtrarAtipicos } from "./math-utils";

//PRUEBA FUNCION CALCULAR MEDIA

const datosMedia = [10, 20, 30];
const resultadoMedia = calcularMedia(datosMedia);
console.log(`La media de los datos es: ${resultadoMedia}`);


//PRUEBA FUNCION CALCULAR MEDIANA

const datosMediana = [10, 20, 30];
const resultadoMediana = calcularMediana(datosMediana);
console.log(`La mediana de los datos es: ${resultadoMediana}`);

const datosMedianaDos = [10, 20, 30, 40];
const resultadoMedianaDos = calcularMediana(datosMedianaDos);
console.log(`La mediana de los datos es: ${resultadoMedianaDos}`);

// PRUEBA FUNCION FILTRAR ATIPICOS

const datosAtipicos = [10, 20, 30, -60, 70, 40, -90, 100];
const limiteAtipicos = 50;
const resultadoAtipicos = filtrarAtipicos(datosAtipicos, limiteAtipicos);
console.log(`Los datos sin atípicos son: ${resultadoAtipicos}`);