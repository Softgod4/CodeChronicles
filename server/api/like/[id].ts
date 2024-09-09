export default defineEventHandler(async event => {
  const { id } = event.context.params || {};
  const table = process.env.DATABASE_TABLE;
  const sql = usePostgres();

  if (!id || !table) {
    return { error: 'Invalid request, id or table is missing' };
  }

  const postId = parseInt(id, 10);
  if (isNaN(postId)) {
    return { error: 'Invalid post ID' };
  }

  const getPost = await sql`
    UPDATE Posts
    set likes = likes + 1
    WHERE post_id = ${postId}
  `.values();

  await sql.end();
  return getPost;
});
