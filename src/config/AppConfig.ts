import { SqlDataBase, KnexDatabase } from "../database/KnexDatabase";

// decorator Singleton
export class AppConfig {
  private static instance: AppConfig;
  static getInstance(): AppConfig {
    if (!AppConfig.instance) AppConfig.instance = new AppConfig();
    return AppConfig.instance;
  }

  private db: SqlDataBase;
  private constructor() {
    this.db = KnexDatabase.getDatabase();
  }

  public getDb(): SqlDataBase {
    return this.db;
  }
}
