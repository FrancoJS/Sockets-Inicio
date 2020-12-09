let socket = io();

// on: Escuchar eventos
socket.on("connect", () => {
  console.log("Conectado al servidor");
});

socket.on("disconnect", () => {
  console.log("Perdimos conexion con el servidor");
});

//emit: Enviar informacion
socket.emit("enviarMensaje", { usuario: "Jean", mensaje: "Hola mundo" }, (resp) => {
  console.log("Respuesta server: ", resp);
});

//Escucha la informacion del emit del servidor
socket.on("enviarMensaje", (data) => {
  console.log("Servidor: ", data);
});
