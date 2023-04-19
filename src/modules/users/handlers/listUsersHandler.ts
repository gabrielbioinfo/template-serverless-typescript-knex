import { APIGatewayEvent } from "aws-lambda";
import { ListUsersUseCase } from "../useCases/ListUsersUseCase";
import { JSONResponseError } from "../../../presenters/JSONResponseError";
import { JSONResponseSuccess } from "../../../presenters/JSONResponseSuccess";

// decorator validator
export async function handler(event: APIGatewayEvent) {
  try {
    const users = await ListUsersUseCase.getInstance().execute();
    return JSONResponseSuccess(users);
  } catch (error: any) {
    return JSONResponseError(error, { errorOnBody: true });
  }
}
