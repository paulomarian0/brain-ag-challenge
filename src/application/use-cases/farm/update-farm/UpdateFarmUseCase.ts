import { IUpdateFarmDTO } from "../../../dtos/farm/UpdateFarmDTO";
import { IFarmRepository } from "../../../repositories/farm/IFarmRepository";

interface IExecute extends IUpdateFarmDTO {}

export class UpdateFarmUseCase {
  constructor(private farmRepository: IFarmRepository) {}

  async execute({ id, name, city, state, total_area, arable_area, vegetation_area, crops }: IExecute) {
    await this.farmRepository.update({ id, name, city, state, total_area, arable_area, vegetation_area, crops });
  }
}
