class persona {
    constructor(nombre, apellido, DNI, telefono, correo, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.correo= correo;
        this.saldo = saldo;
        this.telefono= telefono;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getDni(){
        return this.dni;
    }
    getTelefono(){
        return this.telefono;
    }
    getCorreo(){
        return this.correo;
    }
    getSaldo() {
        return this.saldo;
    }

    ingresarSaldo(monto) {
        this.saldo += monto;
    }
    retirarSaldo(monto) {
        if (this.saldo < monto) {
            alert("Saldo insuficiente");
        }else{
            this.saldo -= monto;
        }
    }
}

lista = [];
i = 0
const button = document.getElementById('toggleButton');
const container = document.getElementById('pantalla');

function iniciar(){
    window.location.href = "registro.html"
}

button.addEventListener('click', () => {
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block'; 
    } else {
        container.style.display = 'none'; 
    }
});

function crearPersona() {
    nuevaPersona = new Persona(document.getElementById("nombre").value, document.getElementById("apellido").value, document.getElementById("dni").value, document.getElementById("telefono").value, document.getElementById("correo").value, document.getElementById("saldo").value);
    lista.push(nuevaPersona);
    mostrarPersona();
}

function mostrarPersona() {
    if (lista.length > 0) {
        document.getElementById("nombree").innerHTML = lista[i].getNombre();
        document.getElementById("apellidoo").innerHTML = lista[i].getApellido();
        document.getElementById("dnii").innerHTML = lista[i].getDNI();
        document.getElementById("telefonoo").innerHTML = lista[i].getTelefono();
        document.getElementById("correoo").innerHTML = lista[i].getCorreo();
        document.getElementById("saldoo").innerHTML = lista[i].getSaldo();
    }else{
        alert("No hay personas");
    }
}

function siguientePersona() {
    if (lista.length > 0) {
        if (i < lista.length - 1) {
            i++;
            mostrarPersona();
        }
    }else{
        alert("No hay personas");
    }
    
}

function anteriorPersona() {
    if (lista.length > 0) {
        if (i > 0) {
            i--;
            mostrarPersona();
        }
    }else{
        alert("No hay personas");
    }
}
