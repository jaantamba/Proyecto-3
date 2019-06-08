-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2019 a las 20:40:39
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vital_check`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor`
--

CREATE TABLE `doctor` (
  `PER_ID` int(200) NOT NULL,
  `ESP_ID` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `doctor`
--

INSERT INTO `doctor` (`PER_ID`, `ESP_ID`) VALUES
(1, 16),
(2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidad`
--

CREATE TABLE `especialidad` (
  `ESP_ID` int(200) NOT NULL,
  `ESP_NOMBRE` varchar(200) NOT NULL,
  `ESP_DESCRIPCION` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `especialidad`
--

INSERT INTO `especialidad` (`ESP_ID`, `ESP_NOMBRE`, `ESP_DESCRIPCION`) VALUES
(1, 'NEUROLOGÍA', 'NEUROLOGÍA'),
(2, 'MEDICINA GENERAL', 'MEDICINA GENERAL'),
(3, 'ALERGOLOGÍA', 'ALERGOLOGÍA'),
(4, 'CARDIOLOGÍA', 'CARDIOLOGÍA'),
(5, 'CIRUGÍA CARDIACA', 'CIRUGÍA CARDIACA'),
(6, 'CIRUGÍA GENERAL', 'CIRUGÍA GENERAL'),
(7, 'CIRUGÍA PLÁSTICA', 'CIRUGÍA PLÁSTICA'),
(8, 'NEUROCIRUGÍA', 'NEUROCIRUGÍA'),
(9, 'CIRUGÍA MAXILOFACIAL', 'CIRUGÍA MAXILOFACIAL'),
(10, 'CIRUGÍA VASCULAR', 'CIRUGÍA VASCULAR'),
(11, 'DERMATOLOGÍA', 'DERMATOLOGÍA'),
(12, 'ENDOCRINOLOGÍA Y NUTRICIÓN', 'ENDOCRINOLOGÍA Y NUTRICIÓN'),
(13, 'GASTROENTEROLOGÍA- DIGESTIVO', 'GASTROENTEROLOGÍA- DIGESTIVO'),
(14, 'GENÉTICA', 'GENÉTICA'),
(15, 'GERIATRÍA', 'GERIATRÍA'),
(16, 'GINECOLOGÍA', 'GINECOLOGÍA'),
(17, 'HEMATOLOGÍA', 'HEMATOLOGÍA'),
(18, 'HEPATOLOGÍA', 'HEPATOLOGÍA'),
(19, 'MEDICINA INTERNA', 'MEDICINA INTERNA'),
(20, 'NEFROLOGÍA', 'NEFROLOGÍA'),
(21, 'NEUMOLOGIA', 'NEUMOLOGIA'),
(22, 'OFTALMOLOGÍA', 'OFTALMOLOGÍA'),
(23, 'OTORRINOLARINGOLOGIA', 'OTORRINOLARINGOLOGIA'),
(24, 'ONCOLOGÍA', 'ONCOLOGÍA'),
(25, 'PEDIATRÍA', 'PEDIATRÍA'),
(26, 'PROCTOLOGÍA', 'PROCTOLOGÍA'),
(27, 'PSIQUIATRÍA', 'PSIQUIATRÍA'),
(28, 'REHABILITACIÓN Y M. DEPORTIVA', 'REHABILITACIÓN Y M. DEPORTIVA'),
(29, 'REUMATOLOGÍA', 'REUMATOLOGÍA'),
(30, 'TRAUMATOLOGÍA', 'TRAUMATOLOGÍA'),
(31, 'UROLOGÍA', 'UROLOGÍA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `PER_ID` int(200) NOT NULL,
  `PER_NOMBRES` varchar(200) NOT NULL,
  `PER_APELLIDOS` varchar(200) NOT NULL,
  `PER_CEDULA` varchar(50) NOT NULL,
  `PER_TELEFONO` varchar(100) NOT NULL,
  `PER_DIRECCION` varchar(200) NOT NULL,
  `PER_GENERO` varchar(20) NOT NULL,
  `PER_TIPO_SANGRE` varchar(200) NOT NULL,
  `PER_TIPO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`PER_ID`, `PER_NOMBRES`, `PER_APELLIDOS`, `PER_CEDULA`, `PER_TELEFONO`, `PER_DIRECCION`, `PER_GENERO`, `PER_TIPO_SANGRE`, `PER_TIPO`) VALUES
(1, 'JOSE ALBERTO', 'ANTAMBA LARREA', '1714146428', '0987556216', 'SANGOLQUI', 'FEMENINO', 'A+', 1),
(2, 'JUAN ANDRES', 'PEREZ RIVERA', '1707980773', '0987565213', 'QUITO', 'MASCULINO', 'O-', 1),
(5, 'ASD', 'ASD', 'ASD', 'ASD', 'ADS', 'ASD', 'ASD', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_persona`
--

CREATE TABLE `tipo_persona` (
  `TIPO_ID` int(11) NOT NULL,
  `TIPO_DESCRIPCION` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_persona`
--

INSERT INTO `tipo_persona` (`TIPO_ID`, `TIPO_DESCRIPCION`) VALUES
(1, 'DOCTOR'),
(2, 'ENFERMERO'),
(3, 'PACIENTE'),
(4, 'ADMINISTRADOR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `triaje`
--

CREATE TABLE `triaje` (
  `TRI_ID` int(11) NOT NULL,
  `TRI_ENCARGADO` int(11) NOT NULL,
  `TRI_PACIENTE` int(11) NOT NULL,
  `TRI_PESO` decimal(10,0) NOT NULL,
  `TRI_ALTURA` decimal(10,0) NOT NULL,
  `TRI_PULSO` decimal(10,0) NOT NULL,
  `TRI_FECHA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `USU_ID` int(11) NOT NULL,
  `USU_NOMBRE` varchar(200) NOT NULL,
  `USU_CONTRASENA` varchar(200) NOT NULL,
  `PER_ID` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`USU_ID`, `USU_NOMBRE`, `USU_CONTRASENA`, `PER_ID`) VALUES
(1, 'jaantamba', '1234\r\n', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD KEY `FK_ES_` (`PER_ID`),
  ADD KEY `FK_TIENES_` (`ESP_ID`);

--
-- Indices de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  ADD PRIMARY KEY (`ESP_ID`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`PER_ID`),
  ADD KEY `FK_ES` (`PER_TIPO`);

--
-- Indices de la tabla `tipo_persona`
--
ALTER TABLE `tipo_persona`
  ADD PRIMARY KEY (`TIPO_ID`);

--
-- Indices de la tabla `triaje`
--
ALTER TABLE `triaje`
  ADD PRIMARY KEY (`TRI_ID`),
  ADD KEY `FK_REALIZO` (`TRI_ENCARGADO`),
  ADD KEY `FK_PACIENTE` (`TRI_PACIENTE`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`USU_ID`),
  ADD KEY `FK_TIENE` (`PER_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `ESP_ID` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `PER_ID` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_persona`
--
ALTER TABLE `tipo_persona`
  MODIFY `TIPO_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `triaje`
--
ALTER TABLE `triaje`
  MODIFY `TRI_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `USU_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `FK_ES_` FOREIGN KEY (`PER_ID`) REFERENCES `persona` (`PER_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_TIENES_` FOREIGN KEY (`ESP_ID`) REFERENCES `especialidad` (`ESP_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `FK_ES` FOREIGN KEY (`PER_TIPO`) REFERENCES `tipo_persona` (`TIPO_ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `triaje`
--
ALTER TABLE `triaje`
  ADD CONSTRAINT `FK_PACIENTE` FOREIGN KEY (`TRI_PACIENTE`) REFERENCES `persona` (`PER_ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_REALIZO` FOREIGN KEY (`TRI_ENCARGADO`) REFERENCES `persona` (`PER_ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `FK_TIENE` FOREIGN KEY (`PER_ID`) REFERENCES `persona` (`PER_ID`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
