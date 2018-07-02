const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    // Enviar al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: "Bienvenido a esta aplicación"
    });

    // Escuchar el cliente
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //envia el mensaje a todos los clientes conectados
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'no encuentro el usuario'
        //     });
        // }
    });

});