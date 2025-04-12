import { Router } from "express";
import { productsRouter } from "./products-routes";
import { tablesRouter } from "./tables-routes";
import { tablesSessionsRouter } from "./tables-sessions-routes";
import { ordersRouter } from "./orders-routes";

const routes = Router();

routes.use("/products", productsRouter);
routes.use("/tables", tablesRouter);
routes.use("/tables-sessions", tablesSessionsRouter);
routes.use("/orders", ordersRouter);
export default routes;
