import { Router } from "express";
import { AuthenticateUserController } from "../../../modules/users/useCases/authenticateUser/authenticateUserController";


const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
/* const refreshTokenController= new RefreshTokenController(); */

authenticateRoutes.post("/sessions", authenticateUserController.handle)
/* authenticateRoutes.post("/refresh-token", refreshTokenController.handle) */

export { authenticateRoutes }