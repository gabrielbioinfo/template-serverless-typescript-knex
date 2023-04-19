import { IsEmail, IsString, IsUUID } from "class-validator";
import { v4 as uuidv4 } from "uuid";

// decorator que facilite o constructor pelas props ?
export class User {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  constructor({
    id,
    name,
    email
  }: {
    id?: string;
    name?: string;
    email?: string;
  }) {
    this.id = id || uuidv4();
    if (name) this.name = name;
    if (email) this.email = email;
  }
}
