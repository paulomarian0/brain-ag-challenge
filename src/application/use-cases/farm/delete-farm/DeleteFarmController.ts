import { Request, Response } from "express";
import { DeleteFarmUseCase } from "./DeleteFarmUseCase";

export class DeleteFarmController {
  constructor(private useCase: DeleteFarmUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.useCase.execute({ id });

    return response.json({ message: "Farm deleted successfully" });
  }
}
