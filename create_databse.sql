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
    user_id INT,
    stars INT,
    review_text VARCHAR(255)
    movie_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
);

CREATE Table users(
    user_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    username VARCHAR(100),
    user_password VARCHAR(100),
    birthday DATE
);
