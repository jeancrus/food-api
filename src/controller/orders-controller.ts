import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex";
import z from "zod";
import { AppError } from "@/utils/AppError";

class OrdersController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const table_session_id = z
        .string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val), {
          message: "Id must be number",
        })
        .parse(req.params.table_session_id);

      const order = await knex<OrderRepository>("orders")
        .select(
          "orders.id",
          "products.name as product_name",
          "orders.quantity",
          "orders.price",
          "orders.created_at",
          "orders.updated_at",
          knex.raw("orders.price * orders.quantity AS total_price")
        )
        .join("products", "orders.product_id", "products.id")
        .where({
          table_session_id,
        })
        .orderBy("orders.created_at", "desc");

      if (!order) {
        throw new AppError("Order not found", 404);
      }

      res.json({ order });
    } catch (error) {
      next(error);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const table_session_id = z
        .string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val), {
          message: "Id must be number",
        })
        .parse(req.params.table_session_id);

      // const order = await knex<OrderRepository>("orders").where({
      //   table_session_id,
      // });

      // if (!order.length) {
      //   throw new AppError("Order not found", 400);
      // }

      // const total_price = order.reduce(
      //   (acc, curr) => acc + curr.price * curr.quantity,
      //   0
      // );

      const order = await knex<OrderRepository>("orders")
        .select(
          knex.raw(
            "COALESCE(SUM(orders.price * orders.quantity), 0) AS total_price"
          ),
          knex.raw("COALESCE(SUM(orders.quantity), 0) AS total_quantity")
        )
        .where({ table_session_id })
        .first();

      if (!order) {
        throw new AppError("Order not found", 400);
      }

      res.json(order);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        table_session_id: z.number(),
        product_id: z.number(),
        quantity: z.number(),
      });

      const { table_session_id, product_id, quantity } = paramsSchema.parse(
        req.body
      );

      const product = await knex<ProductRepository>("products")
        .where("id", product_id)
        .first();

      if (!product) {
        throw new AppError("Product not found", 400);
      }

      const tableSession = await knex<TableSessionRepository>("tables_sessions")
        .where({ id: table_session_id })
        .orderBy("opened_at", "desc")
        .first();

      if (!tableSession) {
        throw new AppError("Table session not found", 400);
      }

      if (tableSession.closed_at) {
        throw new AppError("Table session is closed", 400);
      }

      const order = await knex<OrderRepository>("orders")
        .insert({
          table_session_id,
          product_id,
          quantity,
          price: product.price,
        })
        .returning("*");

      res.status(201).json({ order });
    } catch (error) {
      next(error);
    }
  }
}
export default new OrdersController();
