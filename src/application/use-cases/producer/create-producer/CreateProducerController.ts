import { CreateProducerUseCase } from "./CreateProducerUseCase";
import { Request, Response } from "express";

export class CreateProducerController {
  constructor(private useCase: CreateProducerUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, cpf, cnpj } = request.body;

    await this.useCase.execute({ name, cpf, cnpj });

    return response.json({ message: "Producer created successfully" });
  }
}
