import { ICreateProducerDTO } from "../../../dtos/producer/CreateProducerDTO";
import { IProducerRepository } from "../../../repositories/producer/IProducerRepository";

interface IExecute extends ICreateProducerDTO {}

export class CreateProducerUseCase {
  constructor(private producerRepository: IProducerRepository) {}

  async execute({ name, cpf, cnpj }: IExecute) {
    await this.validate({ name, cpf, cnpj });

    await this.producerRepository.create({ name, cpf, cnpj });
  }

  async validate({ name, cpf, cnpj }: IExecute) {
    const findByName = await this.producerRepository.find({ name });
    const findByCpf = await this.producerRepository.find({ cpf });
    const findByCnpj = await this.producerRepository.find({ cnpj });

    if (!cpf || !cnpj) {
      throw new Error("Você deve informar um CPF ou CNPJ");
    }

    if (!name) {
      throw new Error("Você deve informar um nome");
    }

    if (findByCpf) {
      throw new Error("Já existe um produtor com esse CPF");
    }

    if (findByCnpj) {
      throw new Error("Já existe um produtor com esse CNPJ");
    }

    if (findByName) {
      throw new Error("Já existe um produtor com esse nome");
    }
  }
}
