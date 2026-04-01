# Modelo de datos - Laboratorio 2

## Entidades del dominio

En este laboratorio se han definido dos entidades principales del sistema universitario: `Estudiante` y `Asignatura`.

`Estudiante` representa la información básica de un alumno dentro del sistema. Tiene las propiedades `id`, `nombreCompleto`, `email` y `activo`.

`Asignatura` representa una materia del sistema universitario. Tiene las propiedades `id`, `nombre` y `creditos`.

En ambas entidades se ha usado `readonly` en la propiedad `id` para evitar que el identificador se modifique una vez creado el objeto.

## Estado de matrícula

Para representar los posibles estados de una matrícula, se ha utilizado una **unión discriminada** llamada `EstadoMatricula`.

Esta unión está formada por tres posibles casos:

- `MatriculaActiva`
- `MatriculaSuspendida`
- `MatriculaFinalizada`

Cada uno de estos estados tiene sus propias propiedades.

Por ejemplo:

- una matrícula activa tiene un array de asignaturas
- una matrícula suspendida tiene un motivo
- una matrícula finalizada tiene una nota media

Se ha usado la propiedad `tipo` como discriminante para que TypeScript pueda identificar fácilmente qué estructura tiene cada estado y permitir trabajar con él dentro de la función `generarReporte`.

## Servicio genérico de datos

En la carpeta `services` se ha creado un archivo llamado `api-client.ts` para simular el acceso a datos, como si se estuviera haciendo una llamada a una API o a una base de datos.

Dentro de este archivo se ha definido la interfaz genérica `RespuestaAPI<T>`, que representa la estructura común de una respuesta de red.

La estructura incluye:

- `codigoEstado`
- `exito`
- `datos`
- `errores` (opcional)

También se ha implementado la función genérica `obtenerRecurso<T>(endpoint: string)`, que devuelve una `Promise` tipada y simula una respuesta usando `setTimeout`.

El uso de genéricos permite reutilizar la misma lógica para distintos tipos de datos, manteniendo el tipado fuerte y evitando usar `any`.

## Decisiones de diseño

Durante este laboratorio se han utilizado tanto `interface` como `type`, según lo que tenía más sentido en cada caso.

Se ha usado `interface` para modelar entidades del dominio como `Estudiante` y `Asignatura`, ya que representan objetos con una estructura clara y fija.

Luego, se ha usado `type` para definir `EstadoMatricula`, ya que en este caso era una unión de varios estados posibles, algo para lo que `type` encaja mejor.

También se ha utilizado programación genérica en la parte del servicio de datos, especialmente con `RespuestaAPI<T>` y `obtenerRecurso<T>()`, para poder reutilizar la misma lógica con distintos tipos de datos sin perder el tipado.
