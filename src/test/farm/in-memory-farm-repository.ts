import { randomUUID } from "crypto";
import { ICreateFarmDTO } from "../../application/dtos/farm/CreateFarmDTO";
import { IFarmRepository } from "../../application/repositories/farm/IFarmRepository";
import { Farm } from "../../application/entities/Farm";
import { IListFarmsDTO } from "../../application/dtos/farm/ListFarmsDTO";
import { IUpdateFarmDTO } from "../../application/dtos/farm/UpdateFarmDTO";
import { IDeleteFarmDTO } from "../../application/dtos/farm/DeleteFarmDTO";

export class InMemoryFarmRepository implements IFarmRepository {
  private farms: Farm[] = [];

  async create({ name, city, state, total_area, arable_area, vegetation_area, crops, producerId }: ICreateFarmDTO) {
    const farm = {
      id: randomUUID(),
      name,
      city,
      state,
      total_area,
      arable_area,
      vegetation_area,
      crops,
      producerId
    };

    this.farms.push(farm);
  }

  async list({ id, name, city, state }: IListFarmsDTO) {
    return this.farms.filter(
      farm =>
        (!id || farm.id === id) &&
        (!name || farm.name === name) &&
        (!city || farm.city === city) &&
        (!state || farm.state === state)
    );
  }

  async find({ id, name, city, state }: IListFarmsDTO) {
    return (
      this.farms.find(
        farm =>
          (!id || farm.id === id) &&
          (!name || farm.name === name) &&
          (!city || farm.city === city) &&
          (!state || farm.state === state)
      ) || null
    );
  }

  async count({ id, name, city, state }: IListFarmsDTO) {
    return this.farms.filter(
      farm =>
        (!id || farm.id === id) &&
        (!name || farm.name === name) &&
        (!city || farm.city === city) &&
        (!state || farm.state === state)
    ).length;
  }

  async update({ id, name, city, state, total_area, arable_area, vegetation_area, crops }: IUpdateFarmDTO) {
    const index = this.farms.findIndex(farm => farm.id === id);

    if (index === -1) {
      throw new Error("Farm not found");
    }

    if (!name || !city || !state || !total_area || !arable_area || !vegetation_area || !crops) {
      throw new Error("No field to update");
    }

    this.farms[index] = { ...this.farms[index], name, city, state, total_area, arable_area, vegetation_area, crops };
  }

  async delete({ id }: IDeleteFarmDTO) {
    const index = this.farms.findIndex(farm => farm.id === id);

    this.farms.splice(index, 1);

    if (index === -1) {
      throw new Error("Farm not found");
    }
  }
}
