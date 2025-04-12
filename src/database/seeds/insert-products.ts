import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("products").delete();

  await knex("products").insert([
    { id: 1, name: "Batata frita", price: 100 },
    { id: 2, name: "Strogonoff de frango", price: 200 },
    { id: 3, name: "Macarrão com queijo", price: 300 },
    { id: 4, name: "Pizza", price: 400 },
    { id: 5, name: "Sorvete", price: 500 },
    { id: 6, name: "Suco de laranja", price: 600 },
    { id: 7, name: "Suco de uva", price: 700 },
    { id: 8, name: "Suco de abacaxi", price: 800 },
    { id: 9, name: "Suco de morango", price: 900 },
    { id: 10, name: "Suco de banana", price: 1000 },
  ]);
}
