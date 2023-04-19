import { UserRepository } from "../repository/UserRepository";
import { User } from "../model/User";
import { AppConfig } from "../../../config";
import { SqlDataBase } from "../../../database";

export type ListUsersUseCaseInput = {
  userRepository?: UserRepository;
  db?: SqlDataBase;
};

export class ListUsersUseCase {
  private static instance: ListUsersUseCase;
  private constructor(private readonly userRepository: UserRepository) {}

  public static getInstance(): ListUsersUseCase {
    if (ListUsersUseCase.instance) return ListUsersUseCase.instance;
    const repository = UserRepository.getInstance(
      AppConfig.getInstance().getDb()
    );
    return new ListUsersUseCase(repository);
  }

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll();
    return users.map(user => new User(user));
  }
}
