DELETE FROM instructors_sports;
DELETE FROM instructors_locations;
DELETE FROM instructors;
DELETE FROM sports;
DELETE FROM locations;
DELETE FROM regions;
DELETE FROM students;


INSERT INTO regions (id, name, name_gr) VALUES
(1, 'Attika', 'AttikaGR'),
(2, 'Florina', 'FlorinaGR');


INSERT INTO locations (id, name, name_gr, lng, lat, region_id) VALUES
(1, 'Kropia', 'KropiaGR', 37.9, 23.866667, 1),
(2, 'Paiania', 'PaianiaGR', 37.95, 23.85, 1),
(3, 'Florina', 'FlorinaGR', 40.783333, 21.4, 2),
(4, 'Prespes', 'PrespesGR', 40.75, 21.133333, 2);



INSERT INTO sports (id, name, name_gr) VALUES 
(1, 'Volleyball', 'VolleyGR'),
(2, 'Basketball', 'BasketFR');


INSERT INTO instructors (id, user_name, email, password, first_name, last_name, year_of_birth, gender, street, street_number, zip, region_id, phone, education, photo, occupation, details) VALUES 
(1, 'katerina', 'katerina@example.com', '12345', 'Katerina', 'Ambrazi', 1980, 'female', 'Heracleous', '18A', '14564', 1, '6939571043', 'The American college of Greece', null, 'pilates instructor', 'Katerina loved working out since childhood. She played handball until she went to the university to become a german teacher. Fitness was always her first priority so after teaching for three years she finally decided to do what she loved the most: follow a healthy way of living and motivate others too.'),
(2, 'alexandros', 'alexandor@example.com', '12345', 'Alexandros', 'Koufis', 1985, 'male', 'Agios Vartholomeos', '5', '53100', 2, '6992859382', 'Athens College High Schol', null, 'trainer', 'Being an athlete since his childhood, Alexandros has incorporated athletic spirit in his lifestyle from very early. This spirit, combined with his innate intention to help others, led him to the field of health, rehabilitation, and fitness. His moto, after all, is that there is nothing impossible for those who try.');


INSERT INTO instructors_sports (id, instructor_id, sport_id) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 2, 2);


INSERT INTO instructors_locations (id, instructor_id, location_id) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 4);


INSERT INTO students (id, user_name, email, password, first_name, last_name, phone, details) VALUES 
(1, 'george', 'george@test.com', '12345', 'George', 'Moustakas', '67154920984', null),
(2, 'eleni', 'eleni@test.com', '12345', 'Eleni', 'Foureira', '6912349491', null);
