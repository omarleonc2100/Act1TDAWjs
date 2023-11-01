const alumnos = [];

function agregarAlumno() {
  // Obtener datos del formulario
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const grado = document.getElementById("grado").value;
  const calificacionesInput = document.getElementById("calificaciones").value;
  const calificaciones = calificacionesInput.split(',').map(Number);

  // Crear objeto alumno y agregarlo al array
  const nuevoAlumno = new Map();
  nuevoAlumno.set('nombre', nombre);
  nuevoAlumno.set('edad', edad);
  nuevoAlumno.set('grado', grado);
  nuevoAlumno.set('calificaciones', calificaciones);
  alumnos.push(nuevoAlumno);

  // Limpiar el formulario
  document.getElementById("alumno-form").reset();

  console.log('Estudiante agregado con éxito.');
}

function mostrarAlumnos() {
  // Obtener el elemento donde se mostrará la información
  const alumnosInfo = document.getElementById("alumnos-info");
  alumnosInfo.innerHTML = "Información de los estudiantes:<br>";

  // Iterar sobre los alumnos y mostrar la información en el HTML
  for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];
    alumnosInfo.innerHTML += `Estudiante ${i + 1}:<br>`;
    alumnosInfo.innerHTML += `Nombre: ${alumno.get('nombre')}<br>`;
    alumnosInfo.innerHTML += `Edad: ${alumno.get('edad')}<br>`;
    alumnosInfo.innerHTML += `Grado: ${alumno.get('grado')}<br>`;
    alumnosInfo.innerHTML += `Calificaciones: ${alumno.get('calificaciones').join(', ')}<br>`;
    alumnosInfo.innerHTML += "-------------<br>";
  }
}

function calcularPromedio() {
  // Obtener el nombre del estudiante para calcular el promedio
  const nombreAlumno = document.getElementById("nombrePromedio").value;
  const alumno = alumnos.find(est => est.get('nombre') === nombreAlumno);

  // Obtener el elemento donde se mostrará el resultado del promedio
  const resultadoPromedio = document.getElementById("resultado-promedio");

  if (alumno) {
    const calificaciones = alumno.get('calificaciones');
    const promedio = calificaciones.reduce((total, calificacion) => total + calificacion, 0) / calificaciones.length;
    resultadoPromedio.innerHTML = `El promedio de calificaciones de ${nombreAlumno} es: ${promedio}`;
  } else {
    resultadoPromedio.innerHTML = `Estudiante con nombre "${nombreAlumno}" no encontrado.`;
  }
}
