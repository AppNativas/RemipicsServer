import express from "express";
import dotenv from "dotenv";
import routesPortal from "./services/portal/routes";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.use("/api", routesPortal);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
