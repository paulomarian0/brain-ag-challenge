import { ICreateFarmDTO } from "../../../dtos/farm/CreateFarmDTO";
import { IFarmRepository } from "../../../repositories/farm/IFarmRepository";

interface IExecute extends ICreateFarmDTO {}

export class CreateFarmUseCase {
  constructor(private farmRepository: IFarmRepository) {}

  async execute({ name, city, state, total_area, arable_area, vegetation_area, crops, producerId }: IExecute) {
    await this.validateArea({ name, city, state, total_area, arable_area, vegetation_area, crops, producerId });

    return await this.farmRepository.create({
      name,
      city,
      state,
      total_area,
      arable_area,
      vegetation_area,
      crops,
      producerId
    });
  }

  async validateArea({ name, city, state, total_area, arable_area, vegetation_area, crops }: IExecute) {
    const findByName = await this.farmRepository.find({ name });

    if (findByName) {
      throw new Error("Já existe uma fazenda com esse nome");
    }

    if (arable_area + vegetation_area > total_area) {
      throw new Error("A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda");
    }

    if (!name || !city || !state || !total_area || !arable_area || !vegetation_area || !crops) {
      throw new Error("Preencha todos os campos obrigatórios");
    }
  }
}
