import { states } from "./CreateFarmDTO";

enum crops {
  SOYBEANS = "SOYBEANS",
  CORN = "CORN",
  COTTON = "COTTON",
  COFFEE = "COFFEE",
  SUGARCANE = "SUGARCANE"
}

export interface IUpdateFarmDTO {
  id: string;
  name?: string;
  city?: string;
  state?: states;
  total_area?: number;
  arable_area?: number;
  vegetation_area?: number;
  crops?: crops[];
}
