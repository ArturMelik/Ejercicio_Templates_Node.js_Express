const express = require("express");
const app = express();
const port = 3000;

// Configurar Pug
app.set("view engine", "pug");
app.set("views", "./views");

// Servir archivos estáticos
app.use(express.static("public"));

// Para recibir datos de formularios
app.use(express.urlencoded({ extended: true }));

// Importar rutas web
const webRoutes = require("./routes/web.routes");
app.use("/", webRoutes);

// Iniciar servidor
app.listen(port, () => console.log(`✅ Servidor corriendo en http://localhost:${port}`));
