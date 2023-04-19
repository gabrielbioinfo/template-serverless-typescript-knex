export const JSONResponseSuccess = (body = {}, statusCode = 200) => ({
  statusCode: statusCode,
  body: JSON.stringify(body),
  error: null
});
