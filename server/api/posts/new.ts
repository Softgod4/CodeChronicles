export default eventHandler(async event => {
  const sql = usePostgres();
  const body = await readBody(event);
  return { body };
});