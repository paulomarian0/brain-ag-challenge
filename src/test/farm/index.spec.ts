import { describe, expect, test } from "vitest";
import { InMemoryFarmRepository } from "./in-memory-farm-repository";
import { crops, states } from "../../application/dtos/farm/CreateFarmDTO";

describe("farm", () => {
  const farmRepository = new InMemoryFarmRepository();

  test("should create a farm", async () => {
    await farmRepository.create({
      name: "Fazenda 1",
      city: "Vila Velha",
      state: states.ES,
      total_area: 100,
      arable_area: 50,
      vegetation_area: 50,
      crops: [crops.COFFEE, crops.CORN],
      producerId: "123"
    });

    const farm = await farmRepository.find({ name: "Fazenda 1" });

    expect(farm).toEqual({
      id: expect.any(String),
      name: "Fazenda 1",
      city: "Vila Velha",
      state: states.ES,
      total_area: 100,
      arable_area: 50,
      vegetation_area: 50,
      crops: [crops.COFFEE, crops.CORN],
      producerId: "123"
    });
  });

  test("should list farms", async () => {
    const farms = await farmRepository.list({});

    expect(farms).toEqual([
      {
        id: expect.any(String),
        name: "Fazenda 1",
        city: "Vila Velha",
        state: states.ES,
        total_area: 100,
        arable_area: 50,
        vegetation_area: 50,
        crops: [crops.COFFEE, crops.CORN],
        producerId: "123"
      }
    ]);
  });

  test("should find a farm", async () => {
    const farm = await farmRepository.find({});

    expect(farm).toEqual({
      id: expect.any(String),
      name: "Fazenda 1",
      city: "Vila Velha",
      state: states.ES,
      total_area: 100,
      arable_area: 50,
      vegetation_area: 50,
      crops: [crops.COFFEE, crops.CORN],
      producerId: "123"
    });
  });

  test("should count farms", async () => {
    const count = await farmRepository.count({});

    expect(count).toBe(1);
  });

  test("should update a farm", async () => {
    await farmRepository.create({
      name: "Fazenda 2",
      city: "Vila Velha",
      state: states.SP,
      total_area: 350,
      arable_area: 140,
      vegetation_area: 500,
      crops: [crops.SOYBEANS, crops.SUGARCANE],
      producerId: "123"
    });

    const createdFarm = await farmRepository.find({ name: "Fazenda 2" });

    await farmRepository.update({
      id: createdFarm?.id as string,
      name: "Fazenda 3",
      city: "Vila Velha",
      state: states.ES,
      total_area: 100,
      arable_area: 50,
      vegetation_area: 50,
      crops: [crops.COFFEE, crops.CORN]
    });

    const farm = await farmRepository.find({ id: createdFarm?.id as string });

    expect(farm).toEqual({
      id: createdFarm?.id as string,
      name: "Fazenda 3",
      city: "Vila Velha",
      state: states.ES,
      total_area: 100,
      arable_area: 50,
      vegetation_area: 50,
      crops: [crops.COFFEE, crops.CORN],
      producerId: "123"
    });
  });

  test("should delete a farm", async () => {
    await farmRepository.create({
      name: "Fazenda 4",
      city: "Vila Velha",
      state: states.ES,
      total_area: 100,
      arable_area: 50,
      vegetation_area: 50,
      crops: [crops.COFFEE, crops.CORN],
      producerId: "123"
    });

    const createdFarm = await farmRepository.find({ name: "Fazenda 4" });

    await farmRepository.delete({ id: createdFarm?.id as string });

    const farm = await farmRepository.find({ id: createdFarm?.id });

    expect(farm).toBeNull();
  });
});
