import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("tables").delete();

  // Inserts seed entries
  await knex("tables").insert([
    { id: 1, table_number: 1 },
    { id: 2, table_number: 2 },
    { id: 3, table_number: 3 },
    { id: 4, table_number: 4 },
    { id: 5, table_number: 5 },
    { id: 6, table_number: 6 },
    { id: 7, table_number: 7 },
    { id: 8, table_number: 8 },
    { id: 9, table_number: 9 },
    { id: 10, table_number: 10 },
  ]);
}
