import type { Estudiante } from "./domain/types/estudiante";
import type { EstadoMatricula } from "./domain/types/estado-matricula";
import { generarReporte } from "./domain/types/reporte-matricula";
import { obtenerRecurso } from "./services/api-client";

const estadoActiva: EstadoMatricula = {
  tipo: "ACTIVA",
  asignaturas: [
    { id: "A1", nombre: "Programación", creditos: 6 },
    { id: "A2", nombre: "Bases de Datos", creditos: 6 },
  ],
};

console.log(generarReporte(estadoActiva));

const estudianteEjemplo: Estudiante = {
  id: "E1",
  nombreCompleto: "Elliot Alderson",
  email: "elliot@email.com",
  activo: true,
};

obtenerRecurso<Estudiante>("estudiantes").then((respuesta) => {
  console.log("Respuesta API:", respuesta);
  console.log("Estudiante de ejemplo:", estudianteEjemplo);
});