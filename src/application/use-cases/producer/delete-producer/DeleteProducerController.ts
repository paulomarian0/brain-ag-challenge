import { DeleteProducerUseCase } from "./DeleteProducerUseCase";
import { Request, Response } from "express";

export class DeleteProducerController {
  constructor(private readonly useCase: DeleteProducerUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    await this.useCase.execute({ id });

    return response.json({ message: "Producer deleted successfully" });
  }
}
