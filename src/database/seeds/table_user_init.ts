import { Knex } from "knex";

const tableName = "user";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Inserts seed entries
  await knex(tableName).insert([
    { name: "rowValue1", email: "teste01@teste.com" },
    { name: "rowValue2", email: "teste02@teste.com" },
    { name: "rowValue3", email: "teste03@teste.com" }
  ]);
}
