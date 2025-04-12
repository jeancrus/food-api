import { Router } from "express";
import ordersController from "@/controller/orders-controller";

const ordersRouter = Router();

ordersRouter.post("/", ordersController.create);
ordersRouter.get("/table-session/:table_session_id", ordersController.index);
ordersRouter.get(
  "/table-session/:table_session_id/total-price",
  ordersController.show
);

export { ordersRouter };
