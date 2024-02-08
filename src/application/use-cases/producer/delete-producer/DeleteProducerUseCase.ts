import { IDeleteProducerDTO } from "../../../dtos/producer/DeleteProducerDTO";
import { IProducerRepository } from "../../../repositories/producer/IProducerRepository";

interface IExecute extends IDeleteProducerDTO {}

export class DeleteProducerUseCase {
  constructor(private producerRepository: IProducerRepository) {}

  async execute({ id }: IExecute) {
    await this.producerRepository.delete({ id });
  }
}
