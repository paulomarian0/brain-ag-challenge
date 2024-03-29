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

  async create({ name, city, state, total_area, arable_area, vegetation_area, crops, producerId }: ICreateFarmDTO) {
    await this.repository.farm.create({
      data: { name, city, state, total_area, arable_area, vegetation_area, crops, producerId }
    });
  }

  async list({ id, name, city, state }: IListFarmsDTO) {
    return await this.repository.farm.findMany({
      where: {
        name: name ? { contains: name, mode: "insensitive" } : undefined,
        id: id ? { equals: id } : undefined,
        city: city ? { contains: city } : undefined,
        state
      }
    });
  }

  async find({ id, name, city, state }: IListFarmsDTO) {
    return await this.repository.farm.findFirst({
      where: {
        name: name ? { equals: name, mode: "insensitive" } : undefined,
        id: id ? { equals: id } : undefined,
        city: city ? { contains: city } : undefined,
        state: state ? { equals: state } : undefined
      }
    });
  }

  async count({ id, name, city, state }: IListFarmsDTO) {
    return await this.repository.farm.count({
      where: {
        name: name ? { equals: name, mode: "insensitive" } : undefined,
        id: id ? { equals: id } : undefined,
        city: city ? { contains: city } : undefined,
        state: state ? { equals: state } : undefined // Aqui, substituímos 'contains' por 'equals'
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
    await this.repository.farm.delete({
      where: {
        id
      }
    });
  }
}
