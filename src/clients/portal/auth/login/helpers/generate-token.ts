import { User } from "@prisma/client";
import { configJwt } from "../../../../config/jwt";
import jwt from "jsonwebtoken";

export const generateToken = (dataJwt: Omit<User, "contrasena">): string => {
  return jwt.sign({ user: dataJwt }, configJwt.secretKey, { expiresIn: "1d" });
};
