import { PrismaFarmImplementation } from "../../../repositories/farm/implementation/PrismaFarmImplementation";
import { ListByCropController } from "./ListByCropController";
import { ListByCropUseCase } from "./ListByCropUseCase";

const repository = new PrismaFarmImplementation();

const useCase = new ListByCropUseCase(repository);

const controller = new ListByCropController(useCase);

export { controller as listByCropController };
