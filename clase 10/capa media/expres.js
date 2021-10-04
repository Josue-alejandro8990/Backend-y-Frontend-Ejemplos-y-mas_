const express = require('express');
const app = express();
const puerto = process.env.port || 3000;
app.use(express.json());

app.use(function (req, res, next) {
    console.log("Tiempo:" + Date.now());
    next(); // si no ponemos next no sale del middleware
});

//2
app.use(function (req, res, next) {
    console.log("Tipo de solicitud:" + req.method);
    next();
});

//3
app.use("/api/carritos", function (req, res, next) {
    console.log("Consulta general de carros:");
    next();
});

//4
app.use("/api/login", function (req, res, next) {
    console.log("parte del login");
    next();
})

app.get("/", function (req, res) {
    res.send("Hola mundo");
})

app.listen(puerto, () => console.log("Escuchando en el puerto " + puerto));
var carritos = [
    { id: 1, marca: "BMW", modelo: "x3", year: "2020" },
    { id: 2, marca: "AUDI", modelo: "A1", year: "2021" },
    { id: 3, marca: "MERCEDES", modelo: "CLASE A", year: "2022" },
  ];
  app.get("/api/buscacarro/:marcabuscar", (req, res) => {
    const respuesta = carritos.find(
      (respuesta) => respuesta.marca === req.params.marcabuscar
    );
    if (!respuesta) {
      res.status(404).send("Ese carro no existe");
    } else {
      res.send(respuesta);
    }
  });
  //post 
  app.post("/api/carros", (req, res) => {
    var carroId = carritos.length;
    var nuevoCarro = {
      id: carroId,
      marca: req.body.marca,
      modelo: req.body.modelo,
      year: req.body.year,
    };
    carritos.push(nuevoCarro);
    //poner el codigo 201 que es el correcto, de 200
    res.status(201).send(carritos);
    //res.send(nuevoCarro);
  });

  //put 
  app.put(
    "/api/carros3/:id",
  
    //dejamos la validacion
    [check("marca").isLength({ min: 3 }), check("modelo").isLength({ min: 3 })],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      //verificamos si existe el registro en el arreglo
      const car = carritos.find((car) => car.id === parseInt(req.params.id));
  
      if (!car) {
        res.status(404).send("no existe ese codigo de carro=" + req.params.id);
        return;
      }
      car.marca = req.body.marca;
      car.modelo = req.body.modelo;
      car.year = req.body.year;
  
      //poner el codigo 201 que es el correcto, de 200
      res.status(200).send(car);
      //res.send(nuevoCarro);
    }
  );

  // borrar 
  app.delete("/api/carros3/:id", (req, res) => {
    //verificamos si existe el registro en el arreglo
    const car = carritos.find((car) => car.id === parseInt(req.params.id));
  
    if (!car) {
      res.status(404).send("no existe ese codigo de carro=" + req.params.id);
      return;
    }
  
    const index = carritos.indexOf(car);
    carritos.splice(index, 1);
    res.status(200).send("Se elimino el carrito");
  });