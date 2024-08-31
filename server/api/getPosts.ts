export default eventHandler(async event => {
  const sql = usePostgres();

  const table = process.env.DATABASE_TABLE;

  if (table) {
    const posts = await sql`SELECT * FROM Posts`.values();
    event.waitUntil(sql.end());
    return posts
  } else {
    return false;
  }
});