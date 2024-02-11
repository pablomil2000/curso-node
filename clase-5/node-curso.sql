-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 11-02-2024 a las 07:54:39
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `node-curso`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `nombre`) VALUES
(1, 'Drama'),
(2, 'Action'),
(3, 'Crime'),
(4, 'Adventure'),
(5, 'Sci-Fi'),
(6, 'Romance'),
(7, 'Biography'),
(8, 'Fantasy');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre_movie`
--

CREATE TABLE `genre_movie` (
  `genre_id` int NOT NULL,
  `movie_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `genre_movie`
--

INSERT INTO `genre_movie` (`genre_id`, `movie_id`) VALUES
(1, '241bf55d-b649-4109-af7c-0e6890ded3fc'),
(3, '241bf55d-b649-4109-af7c-0e6890ded3fc'),
(2, '5ad1a235-0d9c-410a-b32b-220d91689a08'),
(4, '5ad1a235-0d9c-410a-b32b-220d91689a08'),
(5, '5ad1a235-0d9c-410a-b32b-220d91689a08'),
(1, '9e6106f0-848b-4810-a11a-3d832a5610f9'),
(6, '9e6106f0-848b-4810-a11a-3d832a5610f9'),
(1, 'c8a7d63f-3b04-44d3-9d95-8782fd7dcfaf'),
(2, 'c8a7d63f-3b04-44d3-9d95-8782fd7dcfaf'),
(3, 'c8a7d63f-3b04-44d3-9d95-8782fd7dcfaf'),
(1, 'dcdd0fad-a94c-4810-8acc-5f108d3b18c3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` varchar(36) NOT NULL,
  `title` varchar(250) NOT NULL,
  `year` int NOT NULL,
  `director` varchar(250) NOT NULL,
  `duration` int NOT NULL,
  `poster` text NOT NULL,
  `rate` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `title`, `year`, `director`, `duration`, `poster`, `rate`) VALUES
('04986507-b3ed-442c-8ae7-4c5df804f896', 'The Avengers', 2012, 'Joss Whedon', 143, 'https://img.fruugo.com/product/7/41/14532417_max.jpg', '8'),
('241bf55d-b649-4109-af7c-0e6890ded3fc', 'Pulp Fiction', 1994, 'Quentin Tarantino', 154, 'https://www.themoviedb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg', '8.9'),
('2e6900e2-0b48-4fb6-ad48-09c7086e54fe', 'The Lion King', 1994, 'Roger Allers, Rob Minkoff', 88, 'https://m.media-amazon.com/images/I/81BMmrwSFOL._AC_UF1000,1000_QL80_.jpg', '8.5'),
('5ad1a235-0d9c-410a-b32b-220d91689a08', 'Inception', 2010, 'Christopher Nolan', 148, 'https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg', '8.8'),
('6a360a18-c645-4b47-9a7b-2a71babbf3e0', 'Avatar', 2009, 'James Cameron', 162, 'https://i.etsystatic.com/35681979/r/il/dfe3ba/3957859451/il_fullxfull.3957859451_h27r.jpg', '7.8'),
('7d2832f8-c70a-410e-8963-4c93bf36cc9c', 'Jurassic Park', 1993, 'Steven Spielberg', 127, 'https://vice-press.com/cdn/shop/products/Jurassic-Park-Editions-poster-florey.jpg?v=1654518755&width=1024', '8.1'),
('7e3fd5ab-60ff-4ae2-92b6-9597f0308d1', 'Gladiator', 2000, 'Ridley Scott', 155, 'https://img.fruugo.com/product/0/60/14417600_max.jpg', '8.5'),
('8fb17ae1-bdfe-45e5-a871-4772d7e526b8', 'The Social Network', 2010, 'David Fincher', 120, 'https://i.pinimg.com/originals/7e/37/b9/7e37b994b613e94cba64f307b1983e39.jpg', '7.7'),
('9e6106f0-848b-4810-a11a-3d832a5610f9', 'Forrest Gump', 1994, 'Robert Zemeckis', 142, 'https://i.ebayimg.com/images/g/qR8AAOSwkvRZzuMD/s-l1600.jpg', '8.8'),
('aa391090-b938-42eb-b520-86ea0aa3917b', 'The Lord of the Rings: The Return of the King', 2003, 'Peter Jackson', 201, 'https://i.ebayimg.com/images/g/0hoAAOSwe7peaMLW/s-l1600.jpg', '8.9'),
('b6e03689-cccd-478e-8565-d92f40813b13', 'Interstellar', 2014, 'Christopher Nolan', 169, 'https://m.media-amazon.com/images/I/91obuWzA3XL._AC_UF1000,1000_QL80_.jpg', '8.6'),
('c8a7d63f-3b04-44d3-9d95-8782fd7dcfaf', 'The Dark Knight', 2008, 'Christopher Nolan', 152, 'https://i.ebayimg.com/images/g/yokAAOSw8w1YARbm/s-l1200.jpg', '9'),
('c906673b-3948-4402-ac7f-73ac3a9e3105', 'The Matrix', 1999, 'Lana Wachowski', 136, 'https://i.ebayimg.com/images/g/QFQAAOSwAQpfjaA6/s-l1200.jpg', '8.7'),
('ccf36f2e-8566-47f7-912d-9f4647250bc7', 'Titanic', 1997, 'James Cameron', 195, 'https://i.pinimg.com/originals/42/42/65/4242658e6f1b0d6322a4a93e0383108b.png', '7.8'),
('dcdd0fad-a94c-4810-8acc-5f108d3b18c3', 'The Shawshank Redemption', 1994, 'Frank Darabont', 142, 'https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp', '9.3');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genre_movie`
--
ALTER TABLE `genre_movie`
  ADD PRIMARY KEY (`genre_id`,`movie_id`),
  ADD KEY `movie_id` (`movie_id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `genre_movie`
--
ALTER TABLE `genre_movie`
  ADD CONSTRAINT `genre_movie_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `genre_movie_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
