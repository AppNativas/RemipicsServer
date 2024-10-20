import { Router } from "express";
import routeLogin from "./login/login";

const routesAuth = Router();

routesAuth.use("/auth", routeLogin);

export default routesAuth;
