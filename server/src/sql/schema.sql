CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	artist text NOT NULL,
	album text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'Ludwig van Beethoven', 'Symphony No. 9', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (2, 'Pirates of the Caribbean (Main Theme)', 'Hans Zimmer', 'Pirates of the Caribbean OST', 'A4 C5 D5 D5 D5 E5 F5 F5 F5 G5 E5 E5 D5 C5 C5 D5 A4 C5 D5 D5 D5 E5 F5 F5 F5 G5 E5 E5 D5 C5 C5 D5');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (3, 'Lost Woods', 'Koji Kondo', 'The Legend of Zelda OST', 'F5 A5 B5 F5 A5 B5 F5 A5 B5 E6 D6 B5 C5 B5 G5 E5 D5 E5 G5 E5');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (4, 'Stay (Ft. Justin Bieber)', 'The Kid LAROI', 'Stay', 'C5 Db5 Ab5 Db5 C5 Db5 Ab4 C5 Db5 Ab5 Db5 C5 Db5 C5 Ab4 Bb4');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (5, 'Song of Storms', 'Koji Kondo', 'The Legend of Zelda OST', 'D4 F4 D5 D4 F4 D5 E5 F5 E5 F5 E5 C5 A4');

VALUES (6, 'Mary had a Little Lamb', 'Nursery Rhymes', 'Children Melodies', 'B5, A5, G5, A5, B5, B5, B5, A5, A5, A5, B5, B5, B5,  B5, A5, G5, A5, B5, B5, B5, B5, A5, A5, B5, A5, G');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (7 'Careless Whisper', 'George Michael', 'Careless Whisper', 'C5, B5, GB, D5, C5, B5, GB, D5, A5, G5, D5, B5, A5, G5, D5, G5, Gb, D5, B5, G5');
