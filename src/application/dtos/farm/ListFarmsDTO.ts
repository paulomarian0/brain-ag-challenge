import { states } from "./CreateFarmDTO";

export interface IListFarmsDTO {
  id?: string;
  name?: string;
  city?: string;
  state?: states;
}
