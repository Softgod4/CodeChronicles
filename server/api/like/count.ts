export default defineEventHandler(async event => {
  const { id } = event.context.params || {};
  const table = process.env.DATABASE_TABLE;
  const sql = usePostgres();

  const getLikeCount = await sql`
        SELECT SUM(likes)
        FROM Posts
    `.values();

  await sql.end();
  return getLikeCount[0];
});