import { IListFarmsDTO } from "../../../dtos/farm/ListFarmsDTO";
import { IFarmRepository } from "../../../repositories/farm/IFarmRepository";

interface IExecute extends IListFarmsDTO {}

export class ListFarmsUseCase {
  constructor(private farmRepository: IFarmRepository) {}

  async execute({ id, name, city, state }: IExecute) {
    const farms = await this.farmRepository.list({ id, name, city, state });
    const count = await this.farmRepository.count({ id, name, city, state });
    const totalAreaSum = farms.reduce((acc, farm) => acc + farm.total_area, 0);

    return {
      total_area_sum: totalAreaSum,
      count,
      data: farms
    };
  }
}
