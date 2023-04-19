export type JSONResponseInput = {
  statusCode?: number;
  body?: any;
  error?: Error | null;
};

export const JSONResponse = ({
  statusCode = 200,
  body = {},
  error = null
}: JSONResponseInput) => ({
  statusCode: !statusCode && error ? 500 : statusCode,
  body: JSON.stringify(body),
  error: error ? JSON.stringify({ error: error.message }) : null
});
