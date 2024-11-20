import { Router } from "express";
import routeLogin from "./login/login";
import routeRegister from "./register/register";

const routesAuth = Router();

routesAuth.use("/auth", routeLogin, routeRegister);

export default routesAuth;
