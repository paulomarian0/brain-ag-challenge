import { IFarmRepository } from "../../../repositories/farm/IFarmRepository";
import { Farm } from "../../../entities/Farm";

export class ListByCropUseCase {
  constructor(private farmRepository: IFarmRepository) {}

  async execute() {
    const farms = await this.farmRepository.list({});

    function countFarmsByCrop(data: Farm[]) {
      const counts: Record<string, number> = {};
      for (const farm of data) {
        for (const crop of farm.crops) {
          counts[crop] = (counts[crop] ?? 0) + 1;
        }
      }
      return Object.keys(counts).map(crop => ({ crop, quantity: counts[crop] }));
    }

    const result = countFarmsByCrop(farms as Farm[]);

    return result;
  }
}
