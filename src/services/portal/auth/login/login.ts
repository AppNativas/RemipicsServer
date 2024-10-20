import { Request, Response, Router } from "express";
import { searchUserLogin } from "../../../../clients/portal/auth/login/login";
import {
  createErrorResponse,
  createSuccessResponse,
} from "../../../utils/create-responses";
import { ApiResponse } from "../../../types/responses";

const routeLogin = Router();

routeLogin.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await searchUserLogin(email, password);
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

export default routeLogin;
