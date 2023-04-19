import { AppConfig } from "../../../config/";
import { SqlDataBase } from "../../../database/";
import { User } from "../model/User";

//decorator Singleton => vale a pena?
//decorator UseDB
export class UserRepository {
  // ---------------------------------------------------------------------
  // Replace pelo decorator
  private static instance: UserRepository;

  public static getInstance(db?: SqlDataBase): UserRepository {
    let dbInstance = db || AppConfig.getInstance().getDb();
    if (!UserRepository.instance)
      UserRepository.instance = new UserRepository(dbInstance);
    return UserRepository.instance;
  }

  private readonly db: SqlDataBase;
  constructor(db: SqlDataBase) {
    this.db = db;
  }
  // ---------------------------------------------------------------------

  async findAll(): Promise<User[]> {
    return this.db("user").select("*");
  }

  async findById(id: string): Promise<User[]> {
    return this.db("user").select("*").where("id", id);
  }

  async create(user: User): Promise<User> {
    const id: string = await this.db("user").insert(user).returning("id");
    user.id = id;
    return user;
  }

  async update(id: string, user: User): Promise<User> {
    await this.db("user").update(user).where("id", id);
    return user;
  }

  async delete(id: string): Promise<void> {
    await this.db("user").delete().where("id", id);
    return;
  }
}
