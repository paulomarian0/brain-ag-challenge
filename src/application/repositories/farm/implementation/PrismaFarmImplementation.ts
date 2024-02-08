import { databaseAdapter } from "../../../adapter/database";
import { ICreateFarmDTO } from "../../../dtos/farm/CreateFarmDTO";
import { IDeleteFarmDTO } from "../../../dtos/farm/DeleteFarmDTO";
import { IListFarmsDTO } from "../../../dtos/farm/ListFarmsDTO";
import { IUpdateFarmDTO } from "../../../dtos/farm/UpdateFarmDTO";
import { IFarmRepository } from "../IFarmRepository";

export class PrismaFarmImplementation implements IFarmRepository {
  private repository: typeof databaseAdapter;

  constructor() {
    this.repository = databaseAdapter;
  }

  async create({ name, city, state, total_area, arable_area, vegetation_area, crops }: ICreateFarmDTO) {
    await this.repository.farm.create({
      data: { name, city, state, total_area, arable_area, vegetation_area, crops }
    });
  }

  async list({ id, name, city, state }: IListFarmsDTO) {
    return await this.repository.farm.findMany({
      where: {
        name: name ? { contains: name } : undefined,
        id: id ? { equals: id, mode: "insensitive" } : undefined,
        city: city ? { contains: city } : undefined,
        state: state ? { contains: state } : undefined
      }
    });
  }

  async update({ id, name, city, state, total_area, arable_area, vegetation_area, crops }: IUpdateFarmDTO) {
    await this.repository.farm.update({
      where: {
        id
      },
      data: {
        name,
        city,
        state,
        total_area,
        arable_area,
        vegetation_area,
        crops
      }
    });
  }

  async delete({ id }: IDeleteFarmDTO) {
    await this.repository.producer.delete({
      where: {
        id
      }
    });
  }
}
