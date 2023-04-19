import knex, { Knex } from "knex";
import knexfile from "./knexfile";

export type SqlDataBase = Knex;

export class KnexDatabase {
  public static getDatabase(): SqlDataBase {
    const environment = process.env.ENVIRONMENT || "development";
    return knex(knexfile[environment]);
  }
}
