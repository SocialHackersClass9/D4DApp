/* Replace with your SQL commands */


CREATE TABLE regions (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL UNIQUE,
    name_gr VARCHAR(200) NOT NULL UNIQUE
);


CREATE TABLE locations (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL UNIQUE,
    name_gr VARCHAR(200) NOT NULL UNIQUE,
    lng DECIMAL(9, 6) NOT NULL,
    lat DECIMAL(9, 6) NOT NULL,
    region_id  int NOT NULL,
    FOREIGN KEY (region_id) REFERENCES regions(id)
);


CREATE TABLE sports (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL UNIQUE,
    name_gr VARCHAR(200) NOT NULL UNIQUE
);


CREATE TABLE instructors (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(200) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NULL,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    year_of_birth int NOT NULL,
    gender VARCHAR(10) NOT NULL,
    street VARCHAR(200) NULL,
    street_number VARCHAR(15) NULL,
    zip VARCHAR(15),
    region_id int NULL,
    phone VARCHAR(200) NULL,
    education VARCHAR(200) NULL,
    photo VARCHAR(200) NULL,
    occupation VARCHAR(300) NULL,
    details TEXT NULL,
    FOREIGN KEY (region_id) REFERENCES regions(id),
    CONSTRAINT chk_instructors_gender CHECK (gender in ('male', 'female'))
);


CREATE TABLE instructors_sports (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    instructor_id int NOT NULL,
    sport_id int NOT NULL,
    FOREIGN KEY (instructor_id) REFERENCES instructors(id),
    FOREIGN KEY (sport_id) REFERENCES sports(id),
    CONSTRAINT uq_instructors_sports UNIQUE (instructor_id, sport_id) 
);


CREATE TABLE instructors_locations (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    instructor_id int NOT NULL,
    location_id int NOT NULL,
    FOREIGN KEY (instructor_id) REFERENCES instructors(id),
    FOREIGN KEY (location_id) REFERENCES locations(id),
    CONSTRAINT uq_instructors_locations UNIQUE (instructor_id, location_id)
);


CREATE TABLE students (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(200) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NULL,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    phone VARCHAR(200) NULL,
    details TEXT NULL
);

