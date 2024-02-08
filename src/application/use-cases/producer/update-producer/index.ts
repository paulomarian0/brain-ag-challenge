import { PrismaProducerImplementation } from "../../../repositories/producer/implementation/PrismaProducerImplementation";
import { UpdateProducerController } from "./UpdateProducerController";
import { UpdateProducerUseCase } from "./UpdateProducerUseCase";

const producerRepository = new PrismaProducerImplementation();

const useCase = new UpdateProducerUseCase(producerRepository);

const controller = new UpdateProducerController(useCase);

export { controller as updateProducerController };
