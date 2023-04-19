import { Knex } from "knex";

const tableName = "user";
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.string("name");
    table.string("email");

    table.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now(6));
    table.timestamp("updated_at", { useTz: true }).defaultTo(knex.fn.now(6));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
