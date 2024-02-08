import { ICreateFarmDTO } from "../../dtos/farm/CreateFarmDTO";
import { IDeleteFarmDTO } from "../../dtos/farm/DeleteFarmDTO";
import { IListFarmsDTO } from "../../dtos/farm/ListFarmsDTO";
import { IUpdateFarmDTO } from "../../dtos/farm/UpdateFarmDTO";
import { Farm } from "../../entities/Farm";

export interface IFarmRepository {
  create(data: ICreateFarmDTO): Promise<void>;
  list(data: IListFarmsDTO): Promise<Farm[]>;
  update(data: IUpdateFarmDTO): Promise<void>;
  delete(data: IDeleteFarmDTO): Promise<void>;
}
