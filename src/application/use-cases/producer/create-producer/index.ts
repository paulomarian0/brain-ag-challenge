import { PrismaProducerImplementation } from "../../../repositories/producer/implementation/PrismaProducerImplementation";
import { CreateProducerController } from "./CreateProducerController";
import { CreateProducerUseCase } from "./CreateProducerUseCase";

const producerRepository = new PrismaProducerImplementation();

const useCase = new CreateProducerUseCase(producerRepository);

const controller = new CreateProducerController(useCase);

export { controller as createProducerController };
