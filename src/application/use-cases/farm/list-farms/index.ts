import { PrismaFarmImplementation } from "../../../repositories/farm/implementation/PrismaFarmImplementation";
import { ListFarmsController } from "./ListFarmsController";
import { ListFarmsUseCase } from "./ListFarmsUseCase";

const repository = new PrismaFarmImplementation();

const useCase = new ListFarmsUseCase(repository);

const controller = new ListFarmsController(useCase);

export { controller as listFarmsController };
