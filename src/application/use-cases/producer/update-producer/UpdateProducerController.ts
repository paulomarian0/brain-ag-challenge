import { UpdateProducerUseCase } from "./UpdateProducerUseCase";
import { Request, Response } from "express";

export class UpdateProducerController {
  constructor(private useCase: UpdateProducerUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    await this.useCase.execute({ id, name });

    return response.json({ message: "Producer updated successfully" });
  }
}
