import { IFarmRepository } from "../../../repositories/farm/IFarmRepository";

export class ListByStateUseCase {
  constructor(private farmRepository: IFarmRepository) {}

  async execute() {
    const farms = await this.farmRepository.list({});

    const farmsByState = farms.reduce((acc: Record<string, number>, farm) => {
      const { state } = farm;
      acc[state] = (acc[state] || 0) + 1;
      return acc;
    }, {});

    const farmsByStateArray = Object.entries(farmsByState).map(([state, quantity]) => ({
      state,
      quantity
    }));

    return farmsByStateArray;
  }
}
