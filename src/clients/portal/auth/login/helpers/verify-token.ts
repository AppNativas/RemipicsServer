import jwt from "jsonwebtoken";
import { configJwt } from "../../../../config/jwt";

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, configJwt.secretKey);
  } catch (error) {
    return null;
  }
};
