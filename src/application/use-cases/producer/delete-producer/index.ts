import { PrismaProducerImplementation } from "../../../repositories/producer/implementation/PrismaProducerImplementation";
import { DeleteProducerController } from "./DeleteProducerController";
import { DeleteProducerUseCase } from "./DeleteProducerUseCase";

const producerRepository = new PrismaProducerImplementation();

const useCase = new DeleteProducerUseCase(producerRepository);

const controller = new DeleteProducerController(useCase);

export { controller as deleteProducerController };
