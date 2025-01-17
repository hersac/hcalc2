import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// Definir __dirname manualmente con ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Servir archivos estáticos: "src/public"
app.use(express.static(path.join(__dirname, "src/public")));

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
