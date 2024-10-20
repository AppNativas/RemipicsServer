import { Router } from "express";
import routesAuth from "./auth/routes-auth";

const routesPortal = Router();

routesPortal.use("", routesAuth);

export default routesPortal;
