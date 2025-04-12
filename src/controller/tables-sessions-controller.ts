import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex";
import z from "zod";
import { AppError } from "@/utils/AppError";

class TablesSessionsController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const tableSession = await knex<TableSessionRepository>(
        "tables_sessions"
      ).orderBy("opened_at", "desc");

      res.json({ tableSession });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_id: z.number(),
      });

      const { table_id } = bodySchema.parse(req.body);

      const sessionExist = await knex<TableSessionRepository>("tables_sessions")
        .select()
        .where("table_id", table_id)
        .orderBy("opened_at", "desc")
        .first();

      if (sessionExist && !sessionExist.closed_at) {
        throw new AppError("Table already opened", 400);
      }

      const tableSession = await knex<TableSessionRepository>("tables_sessions")
        .insert({
          table_id,
          opened_at: knex.fn.now(),
        })
        .returning("*");

      res.json({ tableSession });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val), {
          message: "Id must be number",
        })
        .parse(req.params.id);

      const sessionExist = await knex<TableSessionRepository>("tables_sessions")
        .select()
        .where("table_id", id)
        .orderBy("opened_at", "desc")
        .first();

      if (!sessionExist) {
        throw new AppError("Session not found", 404);
      }

      if (sessionExist.closed_at) {
        throw new AppError("Session already closed", 400);
      }

      const tableSession = await knex<TableSessionRepository>("tables_sessions")
        .update({
          closed_at: knex.fn.now(),
        })
        .where("table_id", id)
        .returning("*");

      res.json({ tableSession });
    } catch (error) {
      next(error);
    }
  }
}

export default new TablesSessionsController();
