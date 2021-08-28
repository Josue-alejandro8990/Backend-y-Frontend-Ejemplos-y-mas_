/* Inicio Notas Alumnos */

const desarrollo_web = {
    alumnos: [{
        nombre: "Juan",
        nota: 10
    }, {
        nombre: "Maria",
        nota: 30
    }, {
        nombre: "Carlos",
        nota: 20
    }, {
        nombre: "Karla",
        nota: 40
    }]
}

const programacion_2 = {
    alumnos: [{
        nombre: "Lili",
        nota: 30
    }, {
        nombre: "Cleo",
        nota: 40
    }, {
        nombre: "Pedro",
        nota: 33
    }, {
        nombre: "Marco",
        nota: 21
    }]
}

function Mostrar_alumnos(curso) {
    var cadena1 = "";
    var cadena2 = "";

    const div1 = document.getElementById("desarrollo_web");
    const div2 = document.getElementById("programacion_2");

    if (curso == "desarrollo") {
        const {
            alumnos
        } = desarrollo_web;
        for (let x = 0; x <= 3; x++) {
            if (alumnos[x].nota <= 10) {
                cadena1 += `<li class="rojo">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }

            if (alumnos[x].nota <= 20 && alumnos[x].nota > 10) {
                cadena1 += `<li class="verde">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }

            if (alumnos[x].nota >= 21) {
                cadena1 += `<li class="azul">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }
        }
        var lista = `<ol> ${cadena1} </ol>`;
        div1.innerHTML = lista;
    }

    if (curso == "programacion") {
        const {
            alumnos
        } = programacion_2;
        for (let x = 0; x <= 3; x++) {
            if (alumnos[x].nota <= 10) {
                cadena2 += `<li class="rojo">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }

            if (alumnos[x].nota <= 20 && alumnos[x].nota > 10) {
                cadena2 += `<li class="verde">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }

            if (alumnos[x].nota >= 21) {
                cadena2 += `<li class="azul">Alumno: ${alumnos[x].nombre}  Nota: ${alumnos[x].nota}</li>`;
            }
        }
        var lista = `<ol> ${cadena2} </ol>`;
        div2.innerHTML = lista;
    }

}
Mostrar_alumnos("desarrollo");
Mostrar_alumnos("programacion");

/* Fin Notas Alumnos */



/* Inicio Calculadora */

var tabla = () => {
    var contenedor = document.getElementById("calculadora");
    var numero = parseFloat(document.getElementById("num").value);
    var operacion = document.getElementById("tipo_operacion").value;
    var cadena = "";

    if (operacion == "suma") {
        for (let i = 1; i < 6; i++) {
            cadena += `<p> ${numero} + ${i} = ${numero+i} </p>`
        }
        contenedor.innerHTML = cadena;
    }

    if (operacion == "resta") {
        for (let i = 1; i < 6; i++) {
            cadena += `<p> ${numero} - ${i} = ${numero-i} </p>`
        }
        contenedor.innerHTML = cadena;

    }
    if (operacion == "multiplicacion") {
        for (let i = 1; i < 6; i++) {
            cadena += `<p> ${numero} * ${i} = ${numero*i} </p>`
        }
        contenedor.innerHTML = cadena;
    }
    if (operacion == "division") {
        for (let i = 1; i < 6; i++) {
            cadena += `<p> ${numero} / ${i} = ${numero/i} </p>`
        }
        contenedor.innerHTML = cadena;
    }
}

/* Fin Calculadora */