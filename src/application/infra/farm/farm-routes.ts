import { Router } from "express";
import { listFarmsController } from "../../use-cases/farm/list-farms";
import { createFarmController } from "../../use-cases/farm/create-farm";
import { updateFarmController } from "../../use-cases/farm/update-farm";
import { deleteFarmController } from "../../use-cases/farm/delete-farm";

const farmRoutes = Router();

farmRoutes.get("/", (req, res) => listFarmsController.handle(req, res));
farmRoutes.post("/", (req, res) => createFarmController.handle(req, res));
farmRoutes.put("/:id", (req, res) => updateFarmController.handle(req, res));
farmRoutes.delete("/:id", (req, res) => deleteFarmController.handle(req, res));

export { farmRoutes };
