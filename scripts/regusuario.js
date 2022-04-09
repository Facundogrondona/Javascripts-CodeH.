class altaUsuaraio {

    constructor(nombre, apellido, idUsuario, mailUsuario, nivel, passw) {
        this.nombreUsuario = nombre;
        this.apellidoUsuario = apellido;
        this.idUsuario = idUsuario;
        this.mailUsuario = mailUsuario;
        this.nivelUsuario = nivel;
        this.usuarioPassword = passw;
    }

    static altaUs() {
        return "El usuario ha sido generado con exito";
    }


};

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

let botonRegistar =document.querySelector("#regUsuario");

botonRegistar.addEventListener("click",function(event){
    event.preventDefault();
    
    let nombr = document.querySelector("#uNombre").value;
    let uApellido = document.querySelector("#uApellido").value;
    let uId = document.querySelector("#uId").value;
    let uMail = document.querySelector("#uMail").value;
    let uNivel = document.querySelector("#uNivel").value;
    if (uNivel == 1) {
        uNivel = "SSAPAC"
    };
    if (uNivel == 2) {
        uNivel = "DGATP"
    };
    if (uNivel == 3) {
        uNivel = "DGSICOM"
    };
    if (uNivel == 4) {
        uNivel = "ADM"
    };
    let usuarioPassword = document.querySelector("#usuarioPassword").value;
    
    console.log(nombr);
    console.log(uApellido);
    console.log(uId);
    console.log(uMail);
    console.log(uNivel);
    console.log(usuarioPassword);
    
    
    
    const u1 = new altaUsuaraio(nombr, uApellido, Number(uId), uMail, uNivel, usuarioPassword);
    console.log(u1);
    console.log(altaUsuaraio.altaUs);
    usuarios.push(u1);
    console.table(usuarios);
    


})
