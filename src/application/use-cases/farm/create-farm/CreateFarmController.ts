import { CreateFarmUseCase } from "./CreateFarmUseCase";
import { Request, Response } from "express";

export class CreateFarmController {
  constructor(private useCase: CreateFarmUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, city, state, total_area, arable_area, vegetation_area, crops, producerId } = request.body;

    await this.useCase.execute({ name, city, state, total_area, arable_area, vegetation_area, crops, producerId });

    return response.json({ message: "Farm created successfully" });
  }
}
