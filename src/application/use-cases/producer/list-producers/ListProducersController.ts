import { ListProducersUseCase } from "./ListProducersUseCase";
import { Request, Response } from "express";

export class ListProducersController {
  constructor(private useCase: ListProducersUseCase) {}

  async handle(request: Request, response: Response) {
    const { id, name, cpf, cnpj } = request.query as {
      id: string;
      name: string;
      cpf: string;
      cnpj: string;
    };

    const producers = await this.useCase.execute({ id, name, cpf, cnpj });

    return response.json(producers);
  }
}
