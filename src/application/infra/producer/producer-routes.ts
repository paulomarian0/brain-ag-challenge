import { Router } from "express";
import { listProducersController } from "../../use-cases/producer/list-producers";
import { createProducerController } from "../../use-cases/producer/create-producer";
import { updateProducerController } from "../../use-cases/producer/update-producer";
import { deleteProducerController } from "../../use-cases/producer/delete-producer";

const producerRoutes = Router();

producerRoutes.get("/", (req, res) => listProducersController.handle(req, res));
producerRoutes.post("/", (req, res) => createProducerController.handle(req, res));
producerRoutes.put("/:id", (req, res) => updateProducerController.handle(req, res));
producerRoutes.delete("/:id", (req, res) => deleteProducerController.handle(req, res));

export { producerRoutes };
