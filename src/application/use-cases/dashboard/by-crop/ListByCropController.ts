import { ListByCropUseCase } from "./ListByCropUseCase";
import { Request, Response } from "express";

export class ListByCropController {
  constructor(private listByCropUseCase: ListByCropUseCase) {}

  async handle(request: Request, response: Response) {
    const farms = await this.listByCropUseCase.execute();

    return response.json(farms);
  }
}
