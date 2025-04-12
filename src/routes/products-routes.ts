import productsController from "@/controller/products-controller";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/", productsController.index);

productsRouter.post("/", productsController.create);

productsRouter.put("/:id", productsController.update);

productsRouter.delete("/:id", productsController.remove);

export { productsRouter };
