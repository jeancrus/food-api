import { Router } from "express";
import tablesSessionsController from "@/controller/tables-sessions-controller";

const tablesSessionsRouter = Router();

tablesSessionsRouter.get("/", tablesSessionsController.index);
tablesSessionsRouter.post("/", tablesSessionsController.create);
tablesSessionsRouter.put("/:id", tablesSessionsController.update);

export { tablesSessionsRouter };
