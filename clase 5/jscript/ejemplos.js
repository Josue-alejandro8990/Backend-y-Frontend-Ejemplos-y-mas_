var musica ="rock";
console.log(musica);
if(musica){
    var musica = 'New Age';
    console.log(musica);
}
console.log("fuera del if ="+musica);

const nombre = "juan";
const trabajo = "Front End Dev";
console.log("nombre :"+nombre+"trabajo"+trabajo);

function pondedatos(){
    const contenedor =document.querySelector('#principal');
    let html ='<ul>'+'<li>nombre:'+nombre+'</li>'+
    '<li>trabajo:'+trabajo+'</li>'+'</ul>';
    
    console.log(html);
    contenedor.innerHTML=html;
}

function actividad (nombre="ingresa un nombre";actividad="ingresa una actividad"){
    console.log(`nombre: ${nombre} actividad =${actividad}`);
    actividad(`juan`,`programador`);
    actividad(`pedrdo`,`crear sitio web`);
    actividad();
}

const actividad=function (nombre="ingresa un nombre";actividad="ingresa una actividad"){
    console.log(`nombre: ${nombre} actividad =${actividad}`);
    actividad(`juan`,`programador`);
    actividad(`pedrdo`,`crear sitio web`);
    actividad();
}
actividad();

let viajando =function(destino){
    return `viajando a la ciudad de destino: ${destino}`;
}
let viaje = viajando(`praga`);
console.log(viaje);

let viajando=(destino)=>{
    return `viajando a la ciudad de: ${destino}`;
}

let viajando = (destino, duracion)=>{
    return `viajando a la ciudad de: ${destino} el viaje duro ${duracion}`;
}


const persona ={
    nombre:"juan",
    profesion: "desarrollador",
    edad: 25
}

const nueva = new persona();
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona[`edad`])

function tarea(nombre,urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
}

tarea.prototype.mostrarinformaciontarea=function(){
    return `la tarea ${nombre} tiene prioridad=${urgencia}`;
}
const tarea1 = new tarea("ganar desarrollo web","urgente");
console.log(tarea1);


const aprendiendojs={
version:`ES6`,
framework:['React',`vue.js`,`angular`]
}
console.log(aprendiendojs);
let version = aprendiendojs.version;
console.log(version);
let fw=aprendiendojs.framework[1];