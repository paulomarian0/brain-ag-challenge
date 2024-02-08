enum crops {
  SOYBEANS = "SOYBEANS",
  CORN = "CORN",
  COTTON = "COTTON",
  COFFEE = "COFFEE",
  SUGARCANE = "SUGARCANE"
}

export interface ICreateFarmDTO {
  name: string;
  city: string;
  state: string;
  total_area: number;
  arable_area: number;
  vegetation_area: number;
  crops: crops[];
}
