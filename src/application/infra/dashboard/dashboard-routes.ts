import { Router } from "express";
import { listByStateController } from "../../use-cases/dashboard/by-state";
import { listByCropController } from "../../use-cases/dashboard/by-crop";
import { listByLandUseController } from "../../use-cases/dashboard/by-land-use";

const dashboardRoutes = Router();

dashboardRoutes.get("/by-state", (req, res) => listByStateController.handle(req, res));
dashboardRoutes.get("/by-land-use", (req, res) => listByLandUseController.handle(req, res));
dashboardRoutes.get("/by-crop", (req, res) => listByCropController.handle(req, res));

export { dashboardRoutes };
