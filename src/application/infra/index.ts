import { Router } from "express";
import { producerRoutes } from "./producer/producer-routes";

const appRoutes = Router();

appRoutes.use("/producer", producerRoutes);

export { appRoutes };
