import { ICreateProducerDTO } from "../../../dtos/producer/CreateProducerDTO";
import { IProducerRepository } from "../../../repositories/producer/IProducerRepository";

interface IExecute extends ICreateProducerDTO {}

export class CreateProducerUseCase {
  constructor(private producerRepository: IProducerRepository) {}

  async execute({ name, cpf, cnpj }: IExecute) {
    await this.producerRepository.create({ name, cpf, cnpj });
  }
}
