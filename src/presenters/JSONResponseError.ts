export type JSONResponseErrorOptions = {
  statusCode?: number;
  errorOnBody?: boolean;
};

export const JSONResponseError = (
  error: Error,
  { statusCode = 500, errorOnBody = false }: JSONResponseErrorOptions = {}
) => {
  const finalError = !error ? new Error("An error occurred!") : error;
  const errorMessage = { error: finalError.message };
  const body = errorOnBody ? errorMessage : {};
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
    error: JSON.stringify(errorMessage)
  };
};
