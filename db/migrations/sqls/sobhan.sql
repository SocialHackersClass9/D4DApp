CREATE TABLE `instructor` (
  `id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `name` varchar(255) NOT NULL,
  `family` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `sports` (
  `id` int NOT NULL,
  `sport` varchar(255) NOT NULL,
  
  CONSTRAINT `sports_ibfk_1` FOREIGN KEY (`id`) REFERENCES `instructor` (`id`));

  CREATE TABLE `location` (
  `id` int NOT NULL,
  `longtitude` float(10,10) NOT NULL,
  `latitude` float(10,10) NOT NULL,
 
  CONSTRAINT `location_ibfk_1` FOREIGN KEY (`id`) REFERENCES `instructor` (`id`));
