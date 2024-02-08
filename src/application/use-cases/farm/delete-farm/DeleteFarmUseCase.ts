import { IDeleteFarmDTO } from "../../../dtos/farm/DeleteFarmDTO";
import { IFarmRepository } from "../../../repositories/farm/IFarmRepository";

interface IExecute extends IDeleteFarmDTO {}

export class DeleteFarmUseCase {
  constructor(private farmRepository: IFarmRepository) {}

  async execute({ id }: IExecute) {
    return await this.farmRepository.delete({ id });
  }
}
