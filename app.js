//Tarea : 2 

//1er punto

var mascotas =  ['perros',' gatos',' canarios',' pez',' serpiente'];

function eliminarMascota() {
    var posicion = mascotas.indexOf('perros');
    if (posicion > -1) {
        mascotas.splice(posicion, 1);
     }
    // mascotas.splice(0, 1)
    console.log('Se ha quitado la primera mascota y ahora queda : ' + mascotas)
}

function eliminarUltimaMascota() {
    var posicion = mascotas.indexOf(' serpiente');
    if (posicion > -1) {
        mascotas.splice(posicion, 5);
     }
    // mascotas.splice(4, 1)
    console.log('Se ha quitado la última mascota y ahora queda : ' + mascotas)
}

function agregarMascota() {
    mascotas.push(' conejos');
    console.log('Se agregó una mascota : ' + mascotas)

}

function contadorMascotas() {
    console.log(mascotas.length)
    // var terminaConOs = [];
    //     for(var i = 0; i < mascotas.length; i++) {
    //         if (mascotas[i].toLowerCase() === "os") terminaConOs.push(i);
    //     }
    // console.log('Mascotas que terminasn en os :' + terminaConOs.length)
}





//2do punto

const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicacion: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],
    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
};

const { 
    nombre,
    cargo,
    empresa: {
        ubicacion: {
            comuna,
            puesto,
        },
        datos : {
            nombre : nombreDato,
        },
        clientes,
    },
    gustos,
    hijos = '(no tiene hijos)',
} = trabajador;


function trabajadorUno() {
    console.log('El trabajador ' + nombre + ' trabaja en ' + nombreDato + ' con cargo ' + cargo + ' y le gusta ' + gustos + ' , ' + hijos)

}
function trabajadorDos () {
    console.log('El trabajador ' + nombre + ' va a su trabajo en ' + comuna + ' , es ' + cargo + ' , en el puesto ' + puesto + ' , trabaja con ' + clientes)
}



