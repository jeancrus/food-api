import { Router } from "express";
import tablesController from "@/controller/tables-controller";

const tablesRouter = Router();

tablesRouter.get("/", tablesController.index);

tablesRouter.post("/", tablesController.create);

// productsRouter.put("/:id", productsController.update);

// productsRouter.delete("/:id", productsController.remove);

export { tablesRouter };
