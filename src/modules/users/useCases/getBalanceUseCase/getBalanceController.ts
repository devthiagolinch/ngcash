import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetBalanceUseCase } from "./getBalanceUseCase";



class GetBalanceController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.user;
        const getBalanceUseCase = container.resolve(GetBalanceUseCase)

        const balance = await getBalanceUseCase.execute({user_id: id})
        return response.status(200).json(balance)
    }
}

export { GetBalanceController }