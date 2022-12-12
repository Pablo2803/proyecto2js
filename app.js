const productos = [
  { nombre: "Adidas Adizero SL", precio: 42000},
  { nombre: "Adidas Coreracer", precio: 20000 },
  { nombre: "Adidas EQ21 Run", precio: 30000 },
  { nombre: "Adidas NVM V3", precio: 55000 },
  { nombre: "Adidas Supernova", precio: 42000 },
];
let carrito = []

let seleccion = prompt("Desea comprar algun producto si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingresa si o no");
  seleccion = prompt("Desea comprar algo si o no");
}

if (seleccion == "si") {
  alert("a continuacion nuestra lista de productos");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("gracias por venir, hasta pronto!!");
}

while (seleccion != "no") {
  let producto = prompt("agrega un producto a tu carrito");
  let precio = 0;

  if (
    producto == "Adidas Adizero SL" || producto == "Adidas Coreracer" || producto == "Adidas EQ21 Run" || producto == "Adidas NVM V3" || producto == "Adidas Supernova") {
    switch (producto) {
      case "Adidas Adizero SL":
        precio = 42000;
        break;
      case "Adidas Coreracer":
        precio = 20000;
        break;
      case "Adidas EQ21 Run":
        precio = 30000;
        break;
      case "Adidas NVM V3":
        precio = 55000;
        break;
      case "Adidas Supernova":
        precio = 42000;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("cuantas unidades quere llevar"))

    carrito.push({producto, unidades, precio})
  } else {
alert("no tenemos ese producto")
  }

  seleccion = prompt("desea seguir comprando?")

  while(seleccion === "no"){
    alert("gracias por la compra, hasta pronto")
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`el total a pagar por su compra es: ${total}`)
