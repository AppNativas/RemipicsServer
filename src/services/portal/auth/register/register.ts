import { Request, Response, Router } from "express";
import {
  createErrorResponse,
  createSuccessResponse,
} from "../../../utils/create-responses";
import { ApiResponse } from "../../../types/responses";
import {
  registerUser,
  validateUserExist,
} from "../../../../clients/portal/auth/register/register";

const routeRegister = Router();

routeRegister.post("/register", async (req: Request, res: Response) => {
  try {
    const { correo } = req.body;
    console.log("correo------------", correo);
    const existUser = await validateUserExist(correo);

    if (!existUser) throw new Error("User already exists");

    const isCreateUser = await registerUser(req.body);
    if (!isCreateUser) throw new Error("User not created");

    const data = {
      message: "User created successfully",
    };

    const response: ApiResponse<typeof data> = createSuccessResponse(data);
    res.json(response);
  } catch (error) {
    if (error instanceof Error) {
      const response: ApiResponse<null> = createErrorResponse(error.message);
      res.status(401).json(response);
    } else {
      const response: ApiResponse<null> = createErrorResponse(
        "An unknown error occurred"
      );
      res.status(500).json(response);
    }
  }
});

export default routeRegister;
