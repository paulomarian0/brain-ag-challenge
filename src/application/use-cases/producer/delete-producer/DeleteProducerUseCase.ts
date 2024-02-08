import { IDeleteProducerDTO } from "../../../dtos/producer/DeleteProducerDTO";
import { IProducerRepository } from "../../../repositories/producer/IProducerRepository";

interface IExecute extends IDeleteProducerDTO {}

export class DeleteProducerUseCase {
  constructor(private producerRepository: IProducerRepository) {}

  async execute({ id }: IExecute) {
    await this.validate({ id });

    await this.producerRepository.delete({ id });
  }

  async validate({ id }: IExecute) {
    const findById = await this.producerRepository.find({ id });

    if (!id) {
      throw new Error("Você deve informar um id");
    }

    if (!findById) {
      throw new Error("Não existe um produtor com esse id");
    }
  }
}
