`
  CREATE TABLE IF NOT EXISTS Posts (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(100) UNIQUE NOT NULL, 
    content TEXT,
    likes SMALLINT,
    bookmarks SMALLINT,
    created_at TIMESTAMP NOT NULL
  );
`

`
INSERT INTO Posts (name, content, likes, bookmarks, created_at) VALUES ('Я создал телеграм бота', 'Я создал телеграм бота (FYTT), который ищет телеграм каналы всех ваших подписок на ютубе⁠⁠. (Бот на telegraf.js, авторизация через google api, парс ссылок с описания ютуб каналов с помощью https://yt.lemnoslife.com/). +статистика.', 1, 4, now());
`