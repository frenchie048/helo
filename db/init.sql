drop table if exists users;
drop table if exists posts;

create table users (
    id SERIAL PRIMARY KEY
    , username VARCHAR(20) NOT NULL
    , password VARCHAR(20) NOT NULL
    , profile_pic TEXT
);

create table posts (
    id SERIAL PRIMARY KEY
    , title VARCHAR(45) NOT NULL
    , img TEXT NOT NULL
    , content TEXT NOT NULL
    , author_id INTEGER REFERENCES users (id)
);

insert into users (username, password, profile_pic)
    values ('alexisrose', 'ewdavid', 'http://www.realstylenetwork.com/celebrities/wp-content/uploads/sites/4/2015/01/B7OWnyjCMAEo4qm-300x300.jpg')
    , ('davidrose', 'apothecary', 'https://img.sharetv.com/shows/characters/thumbnails/schitts_creek_ca.david_rose.jpg')
    , ('tedthevet', 'vetguy1', 'https://static.tvmaze.com/uploads/images/medium_portrait/134/335503.jpg');

insert into posts (title, img, content, author_id)
    values ('David!', 'https://img.sharetv.com/shows/characters/thumbnails/schitts_creek_ca.david_rose.jpg', 'Ew, David.', 1);