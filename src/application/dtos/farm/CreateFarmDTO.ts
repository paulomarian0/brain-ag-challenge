enum crops {
  SOYBEANS = "SOYBEANS",
  CORN = "CORN",
  COTTON = "COTTON",
  COFFEE = "COFFEE",
  SUGARCANE = "SUGARCANE"
}

export enum states {
  AC = "AC",
  AL = "AL",
  AP = "AP",
  AM = "AM",
  BA = "BA",
  CE = "CE",
  DF = "DF",
  ES = "ES",
  GO = "GO",
  MA = "MA",
  MT = "MT",
  MS = "MS",
  MG = "MG",
  PA = "PA",
  PB = "PB",
  PR = "PR",
  PE = "PE",
  PI = "PI",
  RJ = "RJ",
  RN = "RN",
  RS = "RS",
  RO = "RO",
  RR = "RR",
  SC = "SC",
  SP = "SP",
  SE = "SE",
  TO = "TO"
}

export interface ICreateFarmDTO {
  name: string;
  city: string;
  state: states;
  total_area: number;
  arable_area: number;
  vegetation_area: number;
  crops: crops[];
}
