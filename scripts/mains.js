localStorage.clear() //elimina toda la información
sessionStorage.clear() //elimina toda la información

const repasNivel = [{
        id: 1,
        siglas: "SSAPAC"
    },
    {
        id: 2,
        siglas: "DGATP"
    },
    {
        id: 3,
        siglas: "DGSICOM"
    },
    {
        id: 4,
        siglas: "ADM"
    }
];


let usuarios = [{
        nombreUsuario: "Facundo",
        apellidoUsuario: "Grondona",
        idUsuario: 20286932400,
        mailUsuario: "facundogrondona@gmail.com",
        nivelUsuario: "DGATP",
        usuarioPassword: 123

    },
    {
        nombreUsuario: "adm",
        apellidoUsuario: "adm",
        idUsuario: 123456,
        mailUsuario: "facundogrondona@gmail.com",
        nivelUsuario: "ADM",
        usuarioPassword: 123

    }
];
console.table(usuarios);


// Inicio login in ///

function Login() {
    let uId = document.querySelector(`#inputUsuario`);
    let uPas = document.querySelector(`#inputPassword`);
    console.log(uId);
    console.log(uPas);

    // recorrer un array para validar usuario
    let inOF = usuarios.indexOf(uId);
    let inPAS = usuarios.indexOf(uPas);
    console.log(inOF);

    if (inOF != -1) {
        alert("verifique su numero de usuario");
        
    }
    else if (inPAS != -1){
        alert("verifique su password");
        
    } else {
        window.location.href = "../senciones/principal.html";
    }

};


// Evento Login in //

console.table(usuarios);

let botonlogin = document.querySelector("#btLogin");
botonlogin.addEventListener("click", Login);

// Inicio login in ///

let nomina = [];

let estrategias = [{
        nombre: "detectar",
        cantidad: 100
    },
    {
        nombre: "vacunacion",
        cantidad: 55
    },
    {
        nombre: "ADM. Central",
        cantidad: 17
    },
];

console.table(estrategias);


class Estrtategia {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    static altaestrategia() {
        return "La estatregia ha sido creado con exito";
    }

};

class ALtaprersona {
    constructor(nombre, apellido, cuil, celular, mail, reparticion, funcion, desde, hasta, sueldo, estrateg) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cuil = cuil;
        this.celular = celular;
        this.mail = mail;
        this.reparticion = reparticion;
        this.funcion = funcion;
        this.desde = desde;
        this.hasta = hasta;
        this.sueldo = sueldo;
        this.estrateg = estrateg;


    }

    static altanueva() {
        return "El alta del agente fue cargada exitosamente";
    }

};



let accion = prompt("Ingrese la lestra: A si desea crear una nueva estrategia o B si desea dar de alta una persona");



while (accion == "") {
    alert("Ingrese un dato valido");
    accion = prompt("Ingrese la lestra: A si desea crear una nueva estrategia o B si desea dar de alta una persona");
    console.log(accion);
}
Number

if ((accion == "A") || (accion == "B")) {
    switch (accion) {
        case "A":
            let nombestrategia = prompt("Ingrese el nombre de la Estrategia");
            let cantidad = prompt("ingrese la cantidad de LOYS que requiere la estrategia");
            const est = new Estrtategia(nombestrategia, Number(cantidad));

            console.log(est);
            console.log(Estrtategia.altaestrategia);
            estrategias.push(est);
            console.table(estrategias);
            let respuesta = prompt(`desea incorporar personal a la nueva ${est.nombre} (SI-NO)`);
            if (respuesta = "NO") {
                break;
            } else {
                console.log("Parte a desarrollar")
            }


            case "B":
                let nombre = prompt("Ingrese el nombre del agente");
                let apellido = prompt("ingrese el apellido");
                let cuil = prompt("ingrese el cuil");
                let celular = prompt("ingrese el celular");
                let mail = prompt("ingrese el mail");
                let reparticion = prompt(`ingrese una de las reparticiones habilitadas ${repas[0].siglas}, ${repas[1].siglas}, ${repas[2].siglas} `);
                let funcion = prompt("ingrese su funcion");
                let desde = prompt("ingrese la fecha de inicio del contrato");
                let hasta = prompt("ingrese la fecha de fin del contrato");
                let sueldo = prompt("ingrese la remuneración");
                let estrateg = prompt("ingrese la estrategia a la que pertenece");

                const p1 = new ALtaprersona(nombre, apellido, cuil, celular, mail, reparticion, funcion, desde, hasta, sueldo, estrateg);
                console.log(p1);
                console.log(ALtaprersona.altanueva);
                nomina.push(p1);
                console.table(nomina);

                break;

    }

} else {
    alert("Ingrese un dato valido");
    accion = prompt("Ingrese la lestra: A si desea crear una nueva estrategia o B si desea dar de alta una persona");
}





class Tramite {
    constructor(ccooalta, numeroExpediente, estadaExp, reso, facturado) {
        this.ccooalta = ccooalta;
        this.numeroExpediente = numeroExpediente;
        this.estadaExp = estadaExp;
        this.reso = reso;
        this.facturado = facturado;

    }

};

const resultado2 = estrategias.filter((el) => el.cantidad < 50);
console.table(resultado2);


  

