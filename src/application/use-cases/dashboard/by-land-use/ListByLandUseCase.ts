import { Farm } from "../../../entities/Farm";
import { IFarmRepository } from "../../../repositories/farm/IFarmRepository";

export class ListByLandUseCase {
  constructor(private farmRepository: IFarmRepository) {}

  async execute() {
    const farms = await this.farmRepository.list({});

    function countFarmsByArea(data: Farm[]) {
      const counts: Record<string, number> = { arable_area: 0, vegetation_area: 0 };
      for (const farm of data) {
        counts.arable_area += farm.arable_area;
        counts.vegetation_area += farm.vegetation_area;
      }
      return [counts];
    }

    const result = countFarmsByArea(farms as Farm[]);

    return result;
  }
}
