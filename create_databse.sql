CREATE Table movie(
    movie_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    movie_name VARCHAR(100),
    movie_year INT,
    genre_id INT,
    FOREIGN KEY (genre_id) REFERENCES genre(genre_id)
);

CREATE Table genre(
    genre_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    genre_name VARCHAR(100)
);


CREATE Table movie_review(
    review_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    users_id INT,
    stars INT,
    review_text VARCHAR(255),
    movie_id INT,
    FOREIGN KEY (users_id) REFERENCES users(users_id),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id)
);

CREATE Table users(
    users_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    username VARCHAR(100),
    user_password VARCHAR(100),
    birthday DATE
);

INSERT INTO movie (movie_name, movie_year) VALUES
('Star Wars: The Last Jedi', 2017),
('Star Wars: Episode III – Revenge of the Sith', 2005),
('Return of the Jedi', 1983)

INSERT INTO users (first_name, last_name, username, user_password, birthday) VALUES
('Anakin', 'Skywalker', 'aaanakin', 'salasana', '1980-11-02'),
('Darth', 'Vader', 'Darthhh', 'salasana1', '1935-02-22'),
('Baby', 'Yoda', 'Groku', 'salasana2', '2013-07-03')
