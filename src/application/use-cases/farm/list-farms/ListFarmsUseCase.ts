import { IListFarmsDTO } from "../../../dtos/farm/ListFarmsDTO";
import { IFarmRepository } from "../../../repositories/farm/IFarmRepository";

interface IExecute extends IListFarmsDTO {}

export class ListFarmsUseCase {
  constructor(private farmRepository: IFarmRepository) {}

  async execute({ id, name, city, state }: IExecute) {
    return await this.farmRepository.list({ id, name, city, state });
  }
}
