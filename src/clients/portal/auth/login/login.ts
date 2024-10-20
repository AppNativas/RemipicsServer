import dotenv from "dotenv";
import { getUser } from "../../../database/user";
import { User } from "@prisma/client";
import { generateToken } from "./helpers/generate-token";

dotenv.config();

export const searchUserLogin = async (email: string, password: string) => {
  const user: User = await getUser(email);
  // const isValidPassword = await bcrypt.compare(password, user.contrasena);
  const isValidPassword = password === user.contrasena;
  if (!isValidPassword) {
    throw new Error("Invalid password");
  }

  const { contrasena, ...dataJwt } = user;

  return {
    token: generateToken(dataJwt),
  };
};
