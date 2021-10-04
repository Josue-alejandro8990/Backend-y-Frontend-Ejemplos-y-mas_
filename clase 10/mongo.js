const ejemplo2 = () => {
    console.log(Ejemplo 2 buscamos todos);
    MongoClient.connect(url, function (err, client) {
      if (err) {
        console.log(ups hubo un error: ${err.message});
        throw erro;
      }
  
      var db = client.db("pokemon");
      var cuantos = 0;
      db.collection("pokedex")
        .find()
        .forEach(function (PokemonDoc) {
          cuantos++;
          console.log(${cuantos})nombres: ${PokemonDoc.name});
        });
    });
  };
  
  const ejemplo3 = (nombrePokemon) => {
    //{"evolutions.name":"Bulbasaur"}
    var cuantos = 0;
    console.log(Ejemplo 3 buscamos por evolutions : ${nombrePokemon});
    MongoClient.connect(url, function (err, client) {
      if (err) {
        console.log(ups hubo un error: ${err.message});
        throw erro;
      }
  
      var db = client.db("pokemon");
      db.collection("pokedex")
        .find({ "evolutions.name": nombrePokemon })
        .forEach(function (PokeDoc) {
          cuantos = cuantos + 1;
          console.log(${cuantos}) nombre: ${PokeDoc.name});
        });
     
    });
  };
  
  const ejemplo4 = (nuevoPokemon) => {
    console.log(Ejemplo 4 Inserta informacion: ${nuevoPokemon});
    MongoClient.connect(url, function (err, client) {
      if (err) {
        console.log(ups hubo un error: ${err.message});
        throw erro;
      }
  
      var db = client.db("pokemon");
      db.collection("pokedex").insertOne(nuevoPokemon);
      console.log("se inserto un nuevo pokemon");
      
    });
  };
  
  
  
  const ejemplo5 = (idPokemon) => {
    console.log(Ejemplo 5 update informacion: ${idPokemon});
    MongoClient.connect(url, function (err, client) {
      if (err) {
        console.log(ups hubo un error: ${err.message});
        throw erro;
      }
  
      var Condicion = { id: idPokemon };
      var valoresNuevos = {
        $set: {
          name: "Quetzal",
          description: "Nuevo!!!",
          nuevaColumna: "nueva columna!!!",
        },
      };
      //   var newvalues = {
      //     $set: {
      //       cambiosPokemon
      //     },
      //   };
      var db = client.db("pokemon");
      db.collection("pokedex").updateOne(
        Condicion,
        valoresNuevos,
        function (err, res) {
          if (err) {
            console.log("error!!!!!");
            throw err;
          }
          console.log("1 documento actualizado");
        }
      );
      console.log("se actualizó pokemon!!!");
    });
  };
  
  
  
  const ejemplo6 = (idPokemon) => {
    console.log(Ejemplo 6 eliminar informacion: );
    MongoClient.connect(url, function (err, client) {
      if (err) {
        console.log(ups hubo un error: ${err.message});
        throw erro;
      }
  
      var Condicion = { id: idPokemon };
      
  
      var db = client.db("pokemon");
      db.collection("pokedex").deleteOne(
        Condicion,
  
        function (err, res) {
          if (err) {
            console.log("error!!!!!");
            throw err;
          }
          console.log("1 documento eliminado");
        }
      );
      console.log("se borra el pokemon!!!");
    });
  };

var datosNuevos = {
  id: 1000,
  height: "7",
  weight: "69",
  base_experience: "64",
  description:
    "Se plantó una semilla extraña en su espalda al nacer. La planta brota y crece con este POKéMON",
  types: ["grass", "poison", "Jutiapa"],
  name: "JutiapaMon",
  image: "https://cdn.recast.ai/blog/pokebot/1.png",
  evolutions: [
    {
      id: 1,
      name: "Bulbasaur",
    },
    {
      id: 2,
      from: 1,
      trigger: "leveling",
      trigger_lvl: 16,
      name: "Ivysaur",
    },
    {
      id: 3,
      from: 2,
      trigger: "leveling",
      trigger_lvl: 32,
      name: "Venusaur",
    },
  ],
};