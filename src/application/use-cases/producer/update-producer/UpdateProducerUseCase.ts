import { removeCpfCnpjMask } from "../../../../helpers/remove-mask";
import { validateCnpj } from "../../../../helpers/validate-cnpj";
import { validateCpf } from "../../../../helpers/validate-cpf";
import { IUpdateProducerDTO } from "../../../dtos/producer/UpdateProducerDTO";
import { IProducerRepository } from "../../../repositories/producer/IProducerRepository";

interface IExecute extends IUpdateProducerDTO {}

export class UpdateProducerUseCase {
  constructor(private producerRepository: IProducerRepository) {}

  async execute({ id, name }: IUpdateProducerDTO) {
    await this.validate({ id, name });

    await this.producerRepository.update({
      id,
      name
    });
  }

  async validate({ id, name }: IExecute) {
    const findById = await this.producerRepository.find({ id });

    if (!name) {
      throw new Error("Você deve informar um nome");
    }

    if (id && !findById) {
      throw new Error("Produtor não encontrado");
    }
  }
}
