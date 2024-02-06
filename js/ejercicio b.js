
console.log("\nEjercicio B:");

var cantidadDeGatos = 5;//2;10;
var cantidadDePasos = 3;//8;4;

for (var n = 1; n <= cantidadDeGatos; n++) {
  var paso = "";

  for (let j = 0; j < cantidadDePasos; j++) {
    paso = paso + "🐾";
  }

  console.log("Gato #" + n + ": 🐈 " + paso);
}

