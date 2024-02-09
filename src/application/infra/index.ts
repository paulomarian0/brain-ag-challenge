import { Router } from "express";
import { producerRoutes } from "./producer/producer-routes";
import { farmRoutes } from "./farm/farm-routes";
import { dashboardRoutes } from "./dashboard/dashboard-routes";

const appRoutes = Router();

appRoutes.use("/producer", producerRoutes);
appRoutes.use("/farm", farmRoutes);
appRoutes.use("/dashboard", dashboardRoutes);

export { appRoutes };
