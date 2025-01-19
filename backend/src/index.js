import express from "express";
import "dotenv/config";
import { router } from "./routers/products.router.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use(cors());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));
