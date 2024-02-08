import { ICreateProducerDTO } from "../../dtos/producer/CreateProducerDTO";
import { IDeleteProducerDTO } from "../../dtos/producer/DeleteProducerDTO";
import { IListProducersDTO } from "../../dtos/producer/ListProducersDTO";
import { IUpdateProducerDTO } from "../../dtos/producer/UpdateProducerDTO";
import { Producer } from "../../entities/Producer";

export interface IProducerRepository {
  create(data: ICreateProducerDTO): Promise<void>;
  list(data: IListProducersDTO): Promise<Producer[]>;
  update(data: IUpdateProducerDTO): Promise<void>;
  delete(data: IDeleteProducerDTO): Promise<void>;
}
