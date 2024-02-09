import { Router } from "express";
import { producerRoutes } from "./producer/producer-routes";
import { farmRoutes } from "./farm/farm-routes";
import { dashboardRoutes } from "./dashboard/dashboard-routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./../../swagger.json";

const appRoutes = Router();

appRoutes.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
appRoutes.use("/producer", producerRoutes);
appRoutes.use("/farm", farmRoutes);
appRoutes.use("/dashboard", dashboardRoutes);

export { appRoutes };
