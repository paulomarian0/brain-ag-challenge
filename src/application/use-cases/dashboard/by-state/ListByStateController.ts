import { ListByStateUseCase } from "./ListByStateUseCase";
import { Request, Response } from "express";

export class ListByStateController {
  constructor(private listByStateUseCase: ListByStateUseCase) {}

  async handle(request: Request, response: Response) {
    const farms = await this.listByStateUseCase.execute();

    return response.json(farms);
  }
}
