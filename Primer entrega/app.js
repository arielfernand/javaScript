//dar bienvenida
//ingresar nombre
//[ ingresar item
//ingresar ingresar nombre de item
//ingresar precio de item
//ingresar cantidad de item
//validar precios >0 (mayor a cero) y cantidad >0 
//preguntamos i agrega otro item (s/n) ]
//si es N le mostramos el total 


// let precioItem;
// let nombreItem;
// let cantidad;
// let nombreUser;
// let total = 0 /// lo dejo en 0 para que despuesmsume
// let opcion;// s/n
// let ticket = ''

// alert('Bienvenido al carrito de compras') //Alert muestra un mensaje 
// nombreUser = prompt("ingrese su nombre ") // Prompt deja ingrresar datos, entonces se lo asigno 
// do {
//     nombreItem = prompt("ingrese el nombre del nuevo item");
//     precioItem = Number(prompt("ingrese precio"));// Numbre para avisar que es un numero

//     while (precioItem < 0) {///mientras el precio este mal, tiene que ingresar otro
//         precioItem = Number ( prompt('precio invalido, ingrese otro'));
//     }

//     cantidad = Number(prompt('ingrese cantidad'))
//     while (cantidad <= 0) {///mientras sea <=0 queda en el loop 
//         cantidad = Number( prompt ('cantidad invalida, ingrese otra'));
//     } 
//     total = total + cantidad * precioItem;

//     ticket = ticket + `nombre del item: ${nombreItem} precio ${precioItem} cantidad ${cantidad} \n` // \n es para un salto de linea

//     opcion = prompt("desea cargar otro item?")
// } while (opcion == 'si');

// alert(`${ticket} El total para ${nombreUser} es de: $${total}`);
//alert('el total para' + nombreUser + ' es de' + total);






/// while (nota <1 || nota > 10) mientras la nota sea menor a 1 o mayor a 10

/// let continuar = 'si'
/// while (continuar != 'basta') continuar es distinto de basta 
/// continuar = prompt ( seguir/basta)


//ingrese el nombre 
//ingrese la cantidad de dinero
// cantidad de dias del plazo
//mostrar el 


//nombre
//cantidad de carne para un asado 
//cantidad de bebida 
//cantidad de helado
//cantidad de plata 


//ingresar nombre

const interesPlazo = 0.70

let nombre;
let efectivo;
let plazo;
let efectivoFinal;
let efectivoMensual;
let opcion;
let ticket = ''

alert('Bienvenido al simulador de plazo fijo')
nombre = prompt("Por favor ingrese su nombre ")
do {
    efectivo = Number(prompt("ingrese el monto que desearia invertir"))
    while (efectivo < 1000) {
        efectivo = Number(prompt(" el monto minimo es de $1000, por favor ingrese un nuevo monto"))
    }
    plazo = Number(prompt("ingrese la cantidad de dias"))
    while (plazo < 30) {
        plazo = Number(prompt(" La cantidad minima de dias es de 30, por favor ingrese una nueva cantidad"))
    }
    efectivoMensual = efectivo * (interesPlazo * plazo / 365)
    efectivoFinal = efectivo + efectivoMensual
    alert(`Al finalizar el periodo usted recibira $${efectivoMensual.toFixed(2)}`)

    ticket = ticket + `${nombre} si usted deposita $${efectivo} durante ${plazo} dias, recibira $${efectivoMensual.toFixed(2)} \n Teniendo un saldo total de $${efectivoFinal.toFixed(2)} \n \n`

    opcion = prompt("desea simular otro plazo? (si/no) Al finalizar le daremos un resumen de sus consultas")


}
while (opcion == 'si')

alert(` Gracias por utilizar nuestro servicio, le dejamos un detalle de sus consultas \n \n ${ticket}`)

