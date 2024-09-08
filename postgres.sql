CREATE TABLE Posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    description TEXT,
    tags VARCHAR(30)[],
    text TEXT,
    likes SMALLINT NOT NULL,
    img VARCHAR(30),
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO Posts (title, description, tags, text, likes, img, created_on, updated_on)
	VALUES ('Второй пост', 'Описание второго поста', ARRAY['telegram', 'coding'], 'Текст второго поста', 2, 'image/test/macbook.jpg' ,now(), now());

INSERT INTO Posts (title, description, tags, text, likes, img, created_on, updated_on)
	VALUES ('Первый пост', 'Описание первого поста', ARRAY['telegram', 'coding'], 'Текст первого поста', 5, 'image/last-article.webp' ,now(), now());

INSERT INTO Posts (title, description, tags, text, likes, img, created_on, updated_on)
    VALUES ('Третий пост', 'Описание третьего поста', ARRAY['vue', 'javascript'], 'Текст третьего поста', 3, 'image/test/vue.jpg', now(), now());

INSERT INTO Posts (title, description, tags, text, likes, img, created_on, updated_on)
    VALUES ('Четвертый пост', 'Описание четвертого поста', ARRAY['react', 'frontend'], 'Текст четвертого поста', 4, 'image/test/react.jpg', now(), now());

INSERT INTO Posts (title, description, tags, text, likes, img, created_on, updated_on)
    VALUES ('Пятый пост', 'Описание пятого поста', ARRAY['angular', 'typescript'], 'Текст пятого поста', 1, 'image/test/angular.jpg', now(), now());

INSERT INTO Posts (title, description, tags, text, likes, img, created_on, updated_on)
    VALUES ('Шестой пост', 'Описание шестого поста', ARRAY['nodejs', 'backend'], 'Текст шестого поста', 8, 'image/test/node.jpg', now(), now());

INSERT INTO Posts (title, description, tags, text, likes, img, created_on, updated_on)
    VALUES ('Седьмой пост', 'Описание седьмого поста', ARRAY['python', 'data'], 'Текст седьмого поста', 10, 'image/test/python.jpg', now(), now());

INSERT INTO Posts (title, description, tags, text, likes, img, created_on, updated_on)
    VALUES ('Восьмой пост', 'Описание восьмого поста', ARRAY['golang', 'performance'], 'Текст восьмого поста', 6, 'image/test/golang.jpg', now(), now());

INSERT INTO Posts (title, description, tags, text, likes, img, created_on, updated_on)
    VALUES ('Девятый пост', 'Описание девятого поста', ARRAY['ruby', 'rails'], 'Текст девятого поста', 7, 'image/test/ruby.jpg', now(), now());

INSERT INTO Posts (title, description, tags, text, likes, img, created_on, updated_on)
    VALUES ('Десятый пост', 'Описание десятого поста', ARRAY['java', 'spring'], 'Текст десятого поста', 9, 'image/test/java.jpg', now(), now());
