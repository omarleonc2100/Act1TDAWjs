const alumnos = [];

function agregarAlumno() {
  const nuevoAlumno = new Map();
  const nombre = prompt("Ingrese el nombre del estudiante:");
  const edad = parseInt(prompt("Ingrese la edad del estudiante:"));
  const grado = prompt("Ingrese el grado del estudiante:");
  const calificacionesInput = prompt("Ingrese las calificaciones del estudiante (separadas por comas):");
  const calificaciones = calificacionesInput.split(',').map(Number);

  nuevoAlumno.set('nombre', nombre);
  nuevoAlumno.set('edad', edad);
  nuevoAlumno.set('grado', grado);
  nuevoAlumno.set('calificaciones', calificaciones);

  alumnos.push(nuevoAlumno);
  console.log('Estudiante agregado con éxito.');
}

function mostrarAlumnos() {
  console.log("Información de los estudiantes:");
  for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];
    console.log(`Estudiante ${i + 1}:`);
    console.log(`Nombre: ${alumno.get('nombre')}`);
    console.log(`Edad: ${alumno.get('edad')}`);
    console.log(`Grado: ${alumno.get('grado')}`);
    console.log(`Calificaciones: ${alumno.get('calificaciones').join(', ')}`);
    console.log("-------------");
  }
}

function calcularPromedio() {
  const nombreAlumno = prompt("Ingrese el nombre del estudiante para calcular el promedio:");
  const alumno = alumnos.find(est => est.get('nombre') === nombreAlumno);

  if (alumno) {
    const calificaciones = alumno.get('calificaciones');
    const promedio = calificaciones.reduce((total, calificacion) => total + calificacion, 0) / calificaciones.length;
    console.log(`El promedio de calificaciones de ${nombreAlumno} es: ${promedio}`);
  } else {
    console.log(`Estudiante con nombre "${nombreAlumno}" no encontrado.`);
  }
}

function menuPrincipal() {
  while (true) {
    const opcion = prompt("Seleccione una opción:\n" +"1. Añadir un nuevo estudiante\n" + "2. Mostrar la información de todos los estudiantes\n" +"3. Calcular el promedio de calificaciones de un estudiante\n" + "4. Salir del programa"
    );

    switch (opcion) {
      case '1':
        agregarAlumno();
        break;
      case '2':
        mostrarAlumnos();
        break;
      case '3':
        calcularPromedio();
        break;
      case '4':
        console.log("Saliendo del programa. ¡Hasta luego!");
        return;
      default:
        console.log("Opción no válida. Por favor, seleccione una opción válida.");
    }
  }
}

menuPrincipal();
