import { PrismaFarmImplementation } from "../../../repositories/farm/implementation/PrismaFarmImplementation";
import { ListByLandController } from "./ListByLandController";
import { ListByLandUseCase } from "./ListByLandUseCase";

const repository = new PrismaFarmImplementation();

const useCase = new ListByLandUseCase(repository);

const controller = new ListByLandController(useCase);

export { controller as listByLandUseController };
