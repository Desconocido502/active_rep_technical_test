// app.js

const express = require('express');
const app = express();

// Configuración del puerto
const PORT = process.env.PORT || 5000;

// Ruta principal que responde con "¡Hola, mundo!"
app.get('/', (req, res) => {
  res.send('<h1 style="color: blue; font-style: italic;">¡Hola, Bienvenido/a a tu prueba técnica!</h1>');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
