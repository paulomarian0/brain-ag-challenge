import { databaseAdapter } from "../../../adapter/database";
import { ICreateProducerDTO } from "../../../dtos/producer/CreateProducerDTO";
import { IDeleteProducerDTO } from "../../../dtos/producer/DeleteProducerDTO";
import { IListProducersDTO } from "../../../dtos/producer/ListProducersDTO";
import { IUpdateProducerDTO } from "../../../dtos/producer/UpdateProducerDTO";
import { IProducerRepository } from "../IProducerRepository";

export class PrismaProducerImplementation implements IProducerRepository {
  private repository: typeof databaseAdapter;

  constructor() {
    this.repository = databaseAdapter;
  }

  async create({ cpf, cnpj, name }: ICreateProducerDTO) {
    await this.repository.producer.create({
      data: {
        cpf,
        cnpj,
        name
      }
    });
  }

  async list({ id, name, cpf, cnpj }: IListProducersDTO) {
    return await this.repository.producer.findMany({
      where: {
        name: name ? { contains: name } : undefined,
        id: id ? { equals: id, mode: "insensitive" } : undefined,
        cpf: cpf ? { equals: cpf } : undefined,
        cnpj: cnpj ? { equals: cnpj } : undefined
      }
    });
  }

  async find({ name, cnpj, cpf }: IListProducersDTO) {
    return await this.repository.producer.findFirst({
      where: {
        name: name ? { contains: name } : undefined,
        cpf: cpf ? { equals: cpf } : undefined,
        cnpj: cnpj ? { equals: cnpj } : undefined
      }
    });
  }

  async update({ id, name }: IUpdateProducerDTO) {
    await this.repository.producer.update({
      where: {
        id
      },
      data: {
        name
      }
    });
  }

  async delete({ id }: IDeleteProducerDTO) {
    await this.repository.producer.delete({
      where: {
        id
      }
    });
  }
}
