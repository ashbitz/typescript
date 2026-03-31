// FUNCION CALCULAR MEDIA
export function calcularMedia(array: number[]): number | null {

    // Verificar si el array está vacío
    if (array.length === 0) {
        return null;
    }
    // Calcular la suma de los valores del array
    const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);
    // Calcular media
    const media = suma / array.length;
    return media;
}

// FUNCION CALCULAR MEDIANA
export function calcularMediana(array: number[]): number | null {

    // Verificar si el array está vacío
    if (array.length === 0) {
        return null;
    }
    // Calcular mediana
    const arrayOrdenado = [...array].sort((a, b) => a - b);
    const cantidadNumeros = arrayOrdenado.length;
    // const posicion = Math.floor((cantidadNumeros -1) / 2);
    // const mediana = arrayOrdenado[posicion];
    // return mediana;
    if (cantidadNumeros % 2 === 0) {
        return (arrayOrdenado[cantidadNumeros / 2 - 1] + arrayOrdenado[cantidadNumeros / 2]) / 2;
    } else {
        return arrayOrdenado[(cantidadNumeros -1 ) / 2];
    }    
}

// FUNCION FILTRAR ATIPICOS
export function filtrarAtipicos(array: number[], limite: number): number [] {

    // Filtrar array para eliminar números atípicos (mayores a 50 o menores a -50)
    // Math.abs() devuelve el valor absoluto sin signo, convirtiendo los negativos en postivios
    return array.filter((numero) => Math.abs(numero) <= limite);
};
