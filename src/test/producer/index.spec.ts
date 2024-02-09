import { describe, test, expect } from "vitest";
import { InMemoryProducerRepository } from "./in-memory-producer-repository";

describe("producer", () => {
  const producerRepository = new InMemoryProducerRepository();

  test("should create a producer", async () => {
    await producerRepository.create({
      name: "Produtor 1",
      cnpj: "88.699.622/0001-09"
    });

    const producer = await producerRepository.find({ name: "Produtor 1" });

    expect(producer).toEqual({
      id: expect.any(String),
      name: "Produtor 1",
      cnpj: "88.699.622/0001-09"
    });
  });

  test("should list producers", async () => {
    const producers = await producerRepository.list({});

    expect(producers).toEqual([
      {
        id: expect.any(String),
        name: "Produtor 1",
        cnpj: "88.699.622/0001-09"
      }
    ]);
  });

  test("should find a producer", async () => {
    const producer = await producerRepository.find({});

    expect(producer).toEqual({
      id: expect.any(String),
      name: "Produtor 1",
      cnpj: "88.699.622/0001-09"
    });
  });

  test("should update a producer", async () => {
    await producerRepository.create({
      name: "Produtor 2",
      cpf: "335.338.550-90"
    });

    const createdProducer = await producerRepository.find({ name: "Produtor 2" });

    await producerRepository.update({ id: createdProducer?.id as string, name: "Produtor 2 atualizado" });

    const producer = await producerRepository.find({ name: "Produtor 2 atualizado" });

    expect(producer).toEqual({
      id: expect.any(String),
      name: "Produtor 2 atualizado",
      cpf: "335.338.550-90"
    });
  });

  test("should delete a producer", async () => {
    await producerRepository.create({
      name: "Produtor 3",
      cpf: "054.806.610-86"
    });

    const createdProducer = await producerRepository.find({ name: "Produtor 3" });

    await producerRepository.delete({ id: createdProducer?.id as string });

    const producer = await producerRepository.find({ name: "Produtor 3" });

    expect(producer).toBeNull();
  });
});
