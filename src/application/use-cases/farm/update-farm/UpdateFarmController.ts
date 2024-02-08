import { Request, Response } from "express";
import { UpdateFarmUseCase } from "./UpdateFarmUseCase";

export class UpdateFarmController {
  constructor(private useCase: UpdateFarmUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, city, state, total_area, arable_area, vegetation_area, crops } = request.body;

    await this.useCase.execute({ id, name, city, state, total_area, arable_area, vegetation_area, crops });

    return response.json({ message: "Farm updated successfully" });
  }
}
