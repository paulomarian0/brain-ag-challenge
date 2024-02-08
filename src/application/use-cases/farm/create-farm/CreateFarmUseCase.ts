import { ICreateFarmDTO } from "../../../dtos/farm/CreateFarmDTO";
import { IFarmRepository } from "../../../repositories/farm/IFarmRepository";

interface IExecute extends ICreateFarmDTO {}

export class CreateFarmUseCase {
  constructor(private farmRepository: IFarmRepository) {}

  async execute({ name, city, state, total_area, arable_area, vegetation_area, crops }: IExecute) {
    return await this.farmRepository.create({ name, city, state, total_area, arable_area, vegetation_area, crops });
  }
}
