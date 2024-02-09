import { ListByLandUseCase } from "./ListByLandUseCase";
import { Request, Response } from "express";

export class ListByLandController {
  constructor(private listByLandUseCase: ListByLandUseCase) {}

  async handle(request: Request, response: Response) {
    const farms = await this.listByLandUseCase.execute();

    return response.json(farms);
  }
}
