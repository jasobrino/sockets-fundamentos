var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');
});
// escuchar sucesos
socket.on('disconnect', function() {

    console.log('perdimos la conexión con el servidor');
});

// Enviar información
//emit: (evento, objeto, función callback)
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Info del servidor:', mensaje);
});