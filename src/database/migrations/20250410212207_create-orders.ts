import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("orders", (table) => {
    table.increments("id").primary();
    table
      .integer("table_session_id")
      .notNullable()
      .references("id")
      .inTable("tables_sessions");
    table
      .integer("product_id")
      .notNullable()
      .references("id")
      .inTable("products");
    table.integer("quantity").notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("orders");
}
