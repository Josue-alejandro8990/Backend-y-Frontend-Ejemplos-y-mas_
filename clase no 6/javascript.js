//object literal enancement

const banda=`metalica`;
const genero=`electronica`;
const cancion =["master of papel","song","rapper"];


//version ES5 para tras
//const metalica -{
//banda:banda,
//genero:genero,
//cancion:cancion
//}
//console.log(metalica);

//version ES6 para adelante
//const metalica ={banda, genero, cancion};
//console.log(metalica);

const persona={
    nombre:"josue",
    trabajo:"caza recopemzas",
    edad: 320,
    nalo:true,
    mostrarinformacion:function(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
};
persona.mostrarinformacion();

//arreglos,map,object keys



//appcontenedor.innerHTML = carrito;

// recorrer arreglos en html.
//let html=``;
//carrito.forEach(prob => {html +=<li>${prob}</li>});
//const appcontenedor=document.querySelector(`#app`);
//appcontenedor=html;

//map
//const carrito = ["producto 1","producto 2","producto 3"];
//const nuevocarrito = carrito.map(prob=>{
 //return `el producto es: ${prob}`;   
//}
//);

const persona ={
    nombre: "Dennis ritchie",
    logro: "inventor de lenguaje c",
    edad: 70
};

const{nombre}=persona;
const{logro} =persona;
console.log(nombre);
console.log(logro);

let lenguaje = [`javascript`,`php`,`python`];
let frameworks=[`reactjs`,`laravel`,`django`];

//con ES5 forma anterior
let combinado = lenguajes.concat(frameworks);
console.log(combinado);

let[ultimo]=lenguajes.reverse();
console.log(`ultimo =${ultimo}`);


//spread operations
const suma=(a,b,c)=>{
    console.log(a+b+c);
}
const numeros=[2,4,5];
suma(...numeros);

////
const numeros=[2,4,5,8,9,5];
let numeromayor = Math.max(numeors);
console.log(numeromayor);

//operaciones con arreglos
//find.reduce
const personas=[
    {
        nombre:"tania",
        edad:22,
        aprediendo:nodejs,
    },
    {
        nombre:"oscar",
        edad:27,
        aprendiendo:"realjs",
    },
];

const mayores = personas.filter((perso)=>{
    return perso.edad>22;
});
console.log(mayores);

const tania=personas.find(person=>{
    return person.nombre==="tania";
});

console.log(tania);
console.log(`tania aprende: ${tania.aprediendo}`);

//reduce
let total = personas.reduce((edadtotal,perso)=>{
    return edadtotal+perso.edad;
});
console.log(`la suma de las edades son : ${total}`);
console.log(`promedio de edad: ${total/personas.length}`);

//
