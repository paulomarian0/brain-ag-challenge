import { Router } from "express";
import { producerRoutes } from "./producer/producer-routes";
import { farmRoutes } from "./farm/farm-routes";

const appRoutes = Router();

appRoutes.use("/producer", producerRoutes);
appRoutes.use("/farm", farmRoutes);

export { appRoutes };
