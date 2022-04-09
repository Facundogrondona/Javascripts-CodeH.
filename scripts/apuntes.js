<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <p id="saludo"></p>
    <p id="otro"></p>
    <p id="edad"></p>


    <div>
        <h1>Session Storage</h1>
        <div id="session"></div>
    </div>

    <script src="main.js"></script>
</body>

</html>










console.log(localStorage)
//console.log(window.localStorage)
//console.log(this.localStorage)

// Guardar Datos
//localStorage.setItem('saludo', 'Hola a todes')
//localStorage.setItem('vive', true)
//localStorage.setItem('edad', 40)
//document.body.setAttribute('class', 'main')

//sessionStorage.setItem('saludo', 'Bienvenido a coder')
//sessionStorage.setItem('vive', false)
//sessionStorage.setItem('edad', 55)
sessionStorage.setItem('seleccionados', [1,2,3]);


// Recuperar Datos
let saludo = localStorage.getItem('saludo')
let vive = localStorage.getItem('vive')
let edad = localStorage.getItem('edad')
console.log("saludo: " + typeof saludo)
console.log("vive: " + typeof vive)
console.log("edad: " + typeof edad)

document.querySelector('#saludo').textContent = saludo
document.querySelector('#otro').textContent = vive
document.querySelector('#edad').textContent = edad
//let clase = document.body.getAttribute('class')
const lista = sessionStorage.getItem('seleccionados').split(',')
document.querySelector('#session').innerHTML = `
<p>${sessionStorage.getItem('saludo')}</p>
<p>${sessionStorage.getItem('vive')}</p>
<p>${sessionStorage.getItem('edad')}</p>
<p>${sessionStorage.getItem('seleccionados')}</p>
<ul>
    <li>${lista[0]}</li>
    <li>${lista[1]}</li>
    <li>${lista[2]}</li>
</ul>
`


// Borrar datos




para recorrer

for(let i=0; i<localStorage.length; i+=1){
/* let clave = localStorage.key(i)
console.log(clave) */
         let clave = localStorage.key(i);
    document.querySelector('#items').innerHTML += `
    <li>Clave: ${clave} | Valor: ${localStorage.getItem(clave)}</li>
    ` 
}





Cronometro.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <p id="saludo"></p>
    <p id="otro"></p>
    <p id="edad"></p>


    <div>
        <h1>Session Storage</h1>
        <div id="session"></div>
    </div>

    <ul id="items"></ul>

    <script src="main.js"></script>
</body>

</html>


Conometro.js
        document.addEventListener('DOMContentLoaded', () => {
            localStorage.c = localStorage.c || 0
            let t
            let cl = document.querySelector('#crono')
            //cl.innerHTML = (localStorage.c).toFixed(1)

            let incrementar = () => {
                localStorage.c = +localStorage.c + 0.1
            }

            let arrancar = () => {
                t = setInterval(() => {
                    incrementar();
                    mostrar()
                }, 100)
            }

            let parar = () => {
                clearInterval(t)
                t = undefined
            }

            let cambiar = () => {
                if (!t) {
                    arrancar();
                    mostrar()
                } else {
                    parar()
                }
            }

            let mostrar = () => cl.innerHTML = (+localStorage.c).toFixed(1)

            //localStorage.setItem('c', localStorage.getItem(c) || 0)



            document.querySelector('#cambiar').addEventListener('click', cambiar)
            document.querySelector('#inicializar').addEventListener('click', () => {
                localStorage.c = "0"
                mostrar()
            })
        })







/* const producto = {
    nombre: "Iphone",
    precio: 500
}

const strProducto = JSON.stringify(producto)

localStorage.setItem('producto', strProducto);

let obj = localStorage.getItem('producto')
obj = JSON.parse(obj);
alert(producto)
alert(strProducto)
alert(obj.nombre) */
//sessionStorage.setItem('esValido', true);

//localStorage.removeItem('bienvenida');
//sessionStorage.removeItem('esValido');
//localStorage.clear()    //elimina toda la información
//sessionStorage.clear() //elimina toda la información




/* const producto1 = { id: 2, producto: "Arroz" };
const enJSON    = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON);    // string

//localStorage.setItem("producto1", enJSON);
// Se guarda {"id":2,"producto":"Arroz"}

const p = JSON.parse(localStorage.getItem("producto1"))
document.write(producto1.producto) */



/* const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));
 */


class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
    productos.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos){
    producto.sumaIva();
    document.querySelector('#misproductos').innerHTML += `
    <p><span>${producto.nombre}</span> <span>${producto.precio}</span></p>
    `
}




Bloc de notas 

        const editar = () => {
            //console.log(tarea.textContent)
            //const textArea = document.querySelector('#tarea')

            //console.log(tarea.value)
            tarea.value = (localStorage.texto)
            //editar.style.display = "block"
            //guardar.style.display = "none"
            document.querySelector('#editor').style.display = 'block'
            document.querySelector('#visor').style.display = 'none'
        }

        function guardar() {
            localStorage.texto = tarea.value
            visor()

        }

        const visor = () => {
            if (localStorage.texto) {
                texto.innerHTML = localStorage.texto
            } else {
                texto.innerHTML = ""
            }
            //texto.innerHTML = localStorage.texto || "";
            //editar.style.display = "none"
            //guardar.style.display = "block"
            document.querySelector('#editor').style.display = 'none'
            document.querySelector('#visor').style.display = 'block'
        }

        document.addEventListener('DOMContentLoaded', () => {
            //console.log("dsfadfs")
            const btnEditar = document.querySelector('#editar')
            const btnGuardar = document.querySelector('#guardar')

            visor()

            btnEditar.addEventListener('click', editar)
            btnGuardar.addEventListener('click', guardar)

        })




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Bloc de Notas</h1>

    <div id="visor">
        <input type="button" value="Editar" id="editar">
        <pre id="texto"></pre>
    </div>

    <div id="editor">
        <input type="button" value="Guardar" id="guardar" class="editor">
        <div>
            <textarea rows=10 cols="20" id="tarea" class="editor"></textarea>
        </div>
    </div>

    <script src="app.js"></script>
</body>

</html>