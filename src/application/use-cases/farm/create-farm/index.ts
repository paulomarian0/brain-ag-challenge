import { PrismaFarmImplementation } from "../../../repositories/farm/implementation/PrismaFarmImplementation";
import { CreateFarmController } from "./CreateFarmController";
import { CreateFarmUseCase } from "./CreateFarmUseCase";

const repository = new PrismaFarmImplementation();

const useCase = new CreateFarmUseCase(repository);

const controller = new CreateFarmController(useCase);

export { controller as createFarmController };
