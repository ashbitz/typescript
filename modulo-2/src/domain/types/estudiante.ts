// Definimos interfaz para el tipo Estudiante
// Añadimos readonly a la id para que no se pueda modificar una vez creada

export interface Estudiante {
    readonly id: string;
    nombreCompleto: string;
    email: string;
    activo: boolean;
}