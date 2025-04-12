import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex";
import z from "zod";
import { AppError } from "@/utils/AppError";

class ProductsController {
  /**
   * index - GET - List all products
   * show - GET - List a product
   * create - POST - Create a product
   * update - PUT - Update a product
   * remove - DELETE - Delete a product
   */

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.query;

      const products = await knex<ProductRepository>("products")
        .select()
        .whereLike("name", `%${name ?? ""}%`)
        .orderBy("name");

      res.json({ products });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string({ required_error: "Name is required" }).trim().min(2, {
          message: "Name must be at least 2 characters long",
        }),
        price: z
          .number({ required_error: "Price is required" })
          .positive({ message: "Price must be greater than 0" }),
      });

      const { name, price } = bodySchema.parse(req.body);

      const product = await knex<ProductRepository>("products")
        .insert({ name, price })
        .returning("*");

      res.status(201).json({ product });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string({ required_error: "Name is required" }).trim().min(2, {
          message: "Name must be at least 2 characters long",
        }),
        price: z.number({ required_error: "Price is required" }).positive({
          message: "Price must be greater than 0",
        }),
      });

      const id = z
        .string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val), {
          message: "Id must be number",
        })
        .parse(req.params.id);

      const { name, price } = bodySchema.parse(req.body);

      const productExist = await knex<ProductRepository>("products")
        .select()
        .where("id", id)
        .first();

      if (!productExist) {
        throw new AppError("Product not found", 400);
      }

      const product = await knex<ProductRepository>("products")
        .update({ name, price, updated_at: knex.fn.now() })
        .where("id", id)
        .returning("*");

      res.json({ product });
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val), {
          message: "Id must be number",
        })
        .parse(req.params.id);

      const productExist = await knex<ProductRepository>("products")
        .select()
        .where("id", id)
        .first();

      if (!productExist) {
        throw new AppError("Product not found", 400);
      }

      await knex<ProductRepository>("products").delete().where("id", id);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
export default new ProductsController();
