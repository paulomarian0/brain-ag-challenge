import { IUpdateProducerDTO } from "../../../dtos/producer/UpdateProducerDTO";
import { IProducerRepository } from "../../../repositories/producer/IProducerRepository";

interface IExecute extends IUpdateProducerDTO {}

export class UpdateProducerUseCase {
  constructor(private producerRepository: IProducerRepository) {}

  async execute({ id, name, cpf, cnpj }: IUpdateProducerDTO) {
    await this.validate({ id, name, cpf, cnpj });

    await this.producerRepository.update({
      id,
      name,
      cpf,
      cnpj
    });
  }

  async validate({ id, name, cpf, cnpj }: IExecute) {
    const findById = await this.producerRepository.find({ id });
    const findByCpf = await this.producerRepository.find({ cpf });
    const findByCnpj = await this.producerRepository.find({ cnpj });

    if (!id) {
      throw new Error("Você deve informar um id");
    }

    if (!cpf && !cnpj) {
      throw new Error("Você deve informar um CPF ou CNPJ");
    }

    if (!name) {
      throw new Error("Você deve informar um nome");
    }

    if (!findById) {
      throw new Error("Não existe um produtor com esse id");
    }

    if (findByCpf) {
      throw new Error("Já existe um produtor com esse CPF");
    }

    if (findByCnpj) {
      throw new Error("Já existe um produtor com esse CNPJ");
    }
  }
}
