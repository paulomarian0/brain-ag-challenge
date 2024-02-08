import { PrismaFarmImplementation } from "../../../repositories/farm/implementation/PrismaFarmImplementation";
import { DeleteFarmController } from "./DeleteFarmController";
import { DeleteFarmUseCase } from "./DeleteFarmUseCase";

const repository = new PrismaFarmImplementation();

const useCase = new DeleteFarmUseCase(repository);

const controller = new DeleteFarmController(useCase);

export { controller as deleteFarmController };
