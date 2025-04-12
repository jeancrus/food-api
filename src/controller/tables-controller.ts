import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex";

class TablesController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const tables = await knex<TableRepository>("tables")
        .select("*")
        .orderBy("table_number");
      res.json({ tables });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { table_number } = req.body;
      const table = await knex<TableRepository>("tables").insert({
        table_number,
      });
      res.json({ table });
    } catch (error) {
      next(error);
    }
  }
}

export default new TablesController();
