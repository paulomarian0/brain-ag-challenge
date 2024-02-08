import { Request, Response } from "express";
import { ListFarmsUseCase } from "./ListFarmsUseCase";

export class ListFarmsController {
  constructor(private useCase: ListFarmsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, city, state } = request.query as { id: string; name: string; city: string; state: string };

    const farms = await this.useCase.execute({ id, name, city, state });

    return response.json(farms);
  }
}
