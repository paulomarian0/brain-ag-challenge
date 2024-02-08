import { IListProducersDTO } from "../../../dtos/producer/ListProducersDTO";
import { IProducerRepository } from "../../../repositories/producer/IProducerRepository";

interface IExecute extends IListProducersDTO {}

export class ListProducersUseCase {
  constructor(private producerRepository: IProducerRepository) {}

  async execute({ id, name, cpf, cnpj }: IListProducersDTO) {
    const producers = await this.producerRepository.list({
      id,
      name,
      cpf,
      cnpj
    });

    return { data: producers };
  }
}
