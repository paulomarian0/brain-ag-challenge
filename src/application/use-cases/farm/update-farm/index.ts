import { PrismaFarmImplementation } from "../../../repositories/farm/implementation/PrismaFarmImplementation";
import { UpdateFarmController } from "./UpdateFarmController";
import { UpdateFarmUseCase } from "./UpdateFarmUseCase";

const repository = new PrismaFarmImplementation();

const useCase = new UpdateFarmUseCase(repository);

const controller = new UpdateFarmController(useCase);

export { controller as updateFarmController };
