import { ICreateProducerDTO } from "../../../dtos/producer/CreateProducerDTO";
import { IProducerRepository } from "../../../repositories/producer/IProducerRepository";
import { validateCnpj } from "../../../../helpers/validate-cnpj";
import { validateCpf } from "../../../../helpers/validate-cpf";
import { removeCpfCnpjMask } from "../../../../helpers/remove-mask";

interface IExecute extends ICreateProducerDTO {}

export class CreateProducerUseCase {
  constructor(private producerRepository: IProducerRepository) {}

  async execute({ name, cpf, cnpj }: IExecute) {
    await this.validate({ name, cpf, cnpj });
    const { cpf: newCpf, cnpj: newCnpj } = await this.removeMask(cpf, cnpj);

    await this.producerRepository.create({ name, cpf: newCpf, cnpj: newCnpj });
  }

  async validate({ name, cpf, cnpj }: IExecute) {
    const findByName = name && (await this.producerRepository.find({ name }));
    const findByCpf = cpf && (await this.producerRepository.find({ cpf }));
    const findByCnpj = cnpj && (await this.producerRepository.find({ cnpj }));

    if (!cpf && !cnpj) {
      throw new Error("Você deve informar um CPF ou CNPJ");
    }

    if (!name) {
      throw new Error("Você deve informar um nome");
    }

    if (cnpj && !validateCnpj(cnpj)) {
      throw new Error("CNPJ inválido");
    }

    if (cpf && !validateCpf(cpf)) {
      throw new Error("CPF inválido");
    }

    if (cnpj && findByCpf) {
      throw new Error("Já existe um produtor com esse CPF");
    }

    if (cpf && findByCnpj) {
      throw new Error("Já existe um produtor com esse CNPJ");
    }

    if (name && findByName) {
      throw new Error("Já existe um produtor com esse nome");
    }
  }

  async removeMask(cpf?: string, cnpj?: string) {
    return {
      cpf: removeCpfCnpjMask(cpf),
      cnpj: removeCpfCnpjMask(cnpj)
    };
  }
}
