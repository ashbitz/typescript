// Definimos interfaz para el tipo Curso
// Añadimos readonly a la id para que no se pueda modificar una vez creada

export interface Asignatura {
    readonly id: string;
    nombre: string;
    creditos: number;
}