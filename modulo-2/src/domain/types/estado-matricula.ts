import type { Asignatura } from "./asignatura";

// Definimos interfaces para los diferentes estados de matrícula

export interface MatriculaActiva {
    tipo: "ACTIVA"
    asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
    tipo: "SUSPENDIDA"
    motivo: string;
}

export interface MatriculaFinalizada {
    tipo: "FINALIZADA"
    notaMedia: number;
}

export type EstadoMatricula =
    | MatriculaActiva
    | MatriculaSuspendida
    | MatriculaFinalizada;
