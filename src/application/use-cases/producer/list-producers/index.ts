import { PrismaProducerImplementation } from "../../../repositories/producer/implementation/PrismaProducerImplementation";
import { ListProducersController } from "./ListProducersController";
import { ListProducersUseCase } from "./ListProducersUseCase";

const producerRepository = new PrismaProducerImplementation();

const useCase = new ListProducersUseCase(producerRepository);

const controller = new ListProducersController(useCase);

export { controller as listProducersController };
