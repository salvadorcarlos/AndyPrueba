const express = require("express");
const config = require("./config");
const connectDB = require("./db");
const cors = require("cors");

// routes
const establecimientos = require("./routes/api/establecimientos");
const localidades = require("./routes/api/localidades");

const usuarios = require("./routes/api/usuarios");
const provincias = require("./routes/api/provincias");
const aulas = require("./routes/api/aulas");





const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use("/api/establecimientos", establecimientos);
app.use("/api/localidades", localidades);
app.use("/api/usuarios", usuarios);
app.use("/api/provincias",provincias);
app.use("/api/aulas", aulas);


app.listen(config.app.port, () => {
  console.log(`Server running on port ${config.app.port}`);
});
