import { randomUUID } from "crypto";
import { Producer } from "../../application/entities/Producer";
import { ICreateProducerDTO } from "../../application/dtos/producer/CreateProducerDTO";
import { IProducerRepository } from "../../application/repositories/producer/IProducerRepository";
import { IListProducersDTO } from "../../application/dtos/producer/ListProducersDTO";
import { IUpdateProducerDTO } from "../../application/dtos/producer/UpdateProducerDTO";
import { IDeleteProducerDTO } from "../../application/dtos/producer/DeleteProducerDTO";

export class InMemoryProducerRepository implements IProducerRepository {
  private producers: Producer[] = [];

  async create({ cpf, cnpj, name }: ICreateProducerDTO) {
    const producer = {
      id: randomUUID(),
      cpf,
      cnpj,
      name
    };

    this.producers.push(producer as Producer);
  }

  async list({ id, name, cpf, cnpj }: IListProducersDTO) {
    return this.producers.filter(
      producer =>
        (!id || producer.id === id) &&
        (!name || producer.name === name) &&
        (!cpf || producer.cpf === cpf) &&
        (!cnpj || producer.cnpj === cnpj)
    );
  }

  async find({ name, cpf, cnpj }: IListProducersDTO) {
    return (
      this.producers.find(
        producer =>
          (!name || producer.name === name) && (!cpf || producer.cpf === cpf) && (!cnpj || producer.cnpj === cnpj)
      ) || null
    );
  }

  async update({ id, name }: IUpdateProducerDTO) {
    const index = this.producers.findIndex(producer => producer.id === id);

    if (index === -1) {
      throw new Error("Producer not found");
    }

    this.producers[index] = { ...this.producers[index], name: name || "" };
  }

  async delete({ id }: IDeleteProducerDTO) {
    const index = this.producers.findIndex(producer => producer.id === id);

    this.producers.splice(index, 1);

    if (index === -1) {
      throw new Error("Producer not found");
    }
  }
}
