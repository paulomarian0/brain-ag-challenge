import { PrismaFarmImplementation } from "../../../repositories/farm/implementation/PrismaFarmImplementation";
import { ListByStateController } from "./ListByStateController";
import { ListByStateUseCase } from "./ListByStateUseCase";

const repository = new PrismaFarmImplementation();

const useCase = new ListByStateUseCase(repository);

const controller = new ListByStateController(useCase);

export { controller as listByStateController };
