import { IUpdateProducerDTO } from "../../../dtos/producer/UpdateProducerDTO";
import { IProducerRepository } from "../../../repositories/producer/IProducerRepository";

interface IExecute extends IUpdateProducerDTO {}

export class UpdateProducerUseCase {
  constructor(private producerRepository: IProducerRepository) {}

  async execute({ id, name, cpf, cnpj }: IUpdateProducerDTO) {
    await this.producerRepository.update({
      id,
      name,
      cpf,
      cnpj
    });
  }
}
