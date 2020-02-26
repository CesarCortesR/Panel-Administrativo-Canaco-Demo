-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-02-2020 a las 19:34:24
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `canaco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acerca_canaco`
--

CREATE TABLE `acerca_canaco` (
  `ID_ACERCA_CANACO` int(11) NOT NULL,
  `FOTO` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `DESCRIPCION` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `MISION` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `VISION` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `UBICACION` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `LATITUD` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `LONGITUD` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MAPA_INDICADOR` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `CORREO_PRINCIPAL` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `CORREO_SECUNDARIO` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `TELEFONO_PRINCIPAL` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `TELEFONO_SECUNDARIO` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `HORARIO` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `FECHA_MODIFICACION` varchar(45) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `acerca_canaco`
--

INSERT INTO `acerca_canaco` (`ID_ACERCA_CANACO`, `FOTO`, `DESCRIPCION`, `MISION`, `VISION`, `UBICACION`, `LATITUD`, `LONGITUD`, `MAPA_INDICADOR`, `CORREO_PRINCIPAL`, `CORREO_SECUNDARIO`, `TELEFONO_PRINCIPAL`, `TELEFONO_SECUNDARIO`, `HORARIO`, `FECHA_MODIFICACION`) VALUES
(1, 'http://localhost/Panel%20Administrativo%20Canaco%20Final/img/acerca_canaco_img/verde.png', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\r\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', 'Neque porro quisquam est ', 'Neque porro quisquam est ', 'Oficinas de Canaco Poza Rica', 'Neque porro quisquam est qui dolorem ipsum qu', 'Neque porro quisquam est qui dolorem ipsum qu', 'Neque porro quisquam est qui dolorem ipsum qu', 'Neque porro quisquam est qui dolorem ipsum qu', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', 'Miercoles 26 de Febrero del 2020');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afiliacion`
--

CREATE TABLE `afiliacion` (
  `ID_AFILIACION` int(11) NOT NULL,
  `TITULO` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `DESCRIPCION` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `PAGINA_WEB` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `FECHA_MODIFICACION` varchar(45) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `afiliacion`
--

INSERT INTO `afiliacion` (`ID_AFILIACION`, `TITULO`, `DESCRIPCION`, `PAGINA_WEB`, `FECHA_MODIFICACION`) VALUES
(1, 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\r\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\r\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\r\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\r\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', 'Sábado 22 de Febrero del 2020');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afiliacion_beneficios`
--

CREATE TABLE `afiliacion_beneficios` (
  `ID_AFILIACION_BENEFICIOS` int(11) NOT NULL,
  `NOMBRE` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afiliacion_requisitos`
--

CREATE TABLE `afiliacion_requisitos` (
  `ID_AFILIACION_REQUISITOS` int(11) NOT NULL,
  `NOMBRE` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `afiliacion_requisitos`
--

INSERT INTO `afiliacion_requisitos` (`ID_AFILIACION_REQUISITOS`, `NOMBRE`) VALUES
(46, 'Neque porro quisquam est qui dolorem ipsum qu');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `redes_sociales_canaco`
--

CREATE TABLE `redes_sociales_canaco` (
  `ID_REDES_SOCIALES_CANACO` int(11) NOT NULL,
  `FOTO` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `RED_SOCIAL` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `URL` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ESTADO_URL` varchar(1) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `redes_sociales_canaco`
--

INSERT INTO `redes_sociales_canaco` (`ID_REDES_SOCIALES_CANACO`, `FOTO`, `RED_SOCIAL`, `URL`, `ESTADO_URL`) VALUES
(1, 'http://panel.canacopozarica.com/img/redes_sociales_img/whatsapp.png', 'Whatsapp', 'Neque porro quisquam', 'A'),
(2, 'http://panel.canacopozarica.com/img/redes_sociales_img/facebook.png', 'Facebook', 'Neque porro quisquam 2', 'A'),
(3, 'http://panel.canacopozarica.com/img/redes_sociales_img/youtube.png', 'Youtube', 'Neque porro quisquam 3', 'A'),
(4, 'http://panel.canacopozarica.com/img/redes_sociales_img/twitter.png', 'Twitter', 'Neque porro quisquam 4', 'A'),
(5, 'http://panel.canacopozarica.com/img/redes_sociales_img/instagram.png', 'Instagram', 'Neque porro quisquam 5', 'A'),
(6, 'http://panel.canacopozarica.com/img/redes_sociales_img/google.png', 'Google', 'Neque porro quisquam 6', 'A'),
(7, 'http://panel.canacopozarica.com/img/redes_sociales_img/linkedin.png', 'LinkedIn', 'Neque porro quisquam 7', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `Usuario` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Contrasena` varchar(32) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `Usuario`, `Contrasena`) VALUES
(1, 'Canaco', '123456');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acerca_canaco`
--
ALTER TABLE `acerca_canaco`
  ADD PRIMARY KEY (`ID_ACERCA_CANACO`);

--
-- Indices de la tabla `afiliacion`
--
ALTER TABLE `afiliacion`
  ADD PRIMARY KEY (`ID_AFILIACION`);

--
-- Indices de la tabla `afiliacion_beneficios`
--
ALTER TABLE `afiliacion_beneficios`
  ADD PRIMARY KEY (`ID_AFILIACION_BENEFICIOS`);

--
-- Indices de la tabla `afiliacion_requisitos`
--
ALTER TABLE `afiliacion_requisitos`
  ADD PRIMARY KEY (`ID_AFILIACION_REQUISITOS`);

--
-- Indices de la tabla `redes_sociales_canaco`
--
ALTER TABLE `redes_sociales_canaco`
  ADD PRIMARY KEY (`ID_REDES_SOCIALES_CANACO`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `acerca_canaco`
--
ALTER TABLE `acerca_canaco`
  MODIFY `ID_ACERCA_CANACO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `afiliacion`
--
ALTER TABLE `afiliacion`
  MODIFY `ID_AFILIACION` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `afiliacion_beneficios`
--
ALTER TABLE `afiliacion_beneficios`
  MODIFY `ID_AFILIACION_BENEFICIOS` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `afiliacion_requisitos`
--
ALTER TABLE `afiliacion_requisitos`
  MODIFY `ID_AFILIACION_REQUISITOS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `redes_sociales_canaco`
--
ALTER TABLE `redes_sociales_canaco`
  MODIFY `ID_REDES_SOCIALES_CANACO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
