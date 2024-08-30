`
  CREATE TABLE IF NOT EXISTS Posts (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(100) UNIQUE NOT NULL, 
    content TEXT,
    created_at TIMESTAMP NOT NULL
  );
`

