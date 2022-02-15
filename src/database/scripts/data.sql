-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: granbazardb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (2,54,35),(3,54,48),(4,54,55),(5,55,32),(6,55,34),(7,55,35),(8,55,36),(9,56,38),(10,56,39),(11,56,41),(12,57,40),(13,57,42),(14,57,44),(15,58,45),(16,58,46),(17,58,47),(18,58,48),(19,59,49),(20,59,50),(21,59,52),(22,59,54),(23,60,55),(24,61,32),(25,61,32),(26,61,38),(27,61,58),(28,61,57),(29,61,59),(30,61,60);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Muebles'),(2,'Destacados'),(3,'Viajes'),(4,'Uso personal'),(6,'Decoracion');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'azul'),(2,'violeta'),(3,'Rojo'),(4,'Negro'),(5,'Blanco'),(6,'Amarillo');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Argentina'),(7,'Brasil'),(6,'Canada'),(2,'Chile'),(4,'China'),(5,'EEUU'),(3,'India'),(8,'Uruguay');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (2,32,53),(3,38,53),(20,37,54),(21,54,54),(22,32,55),(23,34,55),(24,35,55),(25,36,55),(26,38,56),(27,39,56),(28,41,56),(29,40,57),(30,42,57),(31,44,57),(32,45,58),(33,46,58),(34,47,58),(35,48,58),(36,49,59),(37,50,59),(38,52,59),(39,54,59),(40,55,60),(41,32,61),(42,35,61),(43,38,61),(44,47,61),(45,58,61),(46,57,61),(47,59,61),(48,59,61),(49,60,61);
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (3,'Madera'),(1,'Metal'),(2,'Plastico');
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (29,1,32),(33,1,36),(34,2,36),(35,1,37),(36,1,38),(37,2,38),(38,2,39),(39,4,39),(40,2,40),(41,4,40),(42,2,42),(43,4,42),(44,4,44),(45,2,45),(46,4,45),(47,1,35),(48,2,35),(49,4,41),(52,2,46),(53,3,46),(54,3,47),(55,2,48),(56,3,48),(57,3,49),(58,2,50),(59,3,50),(60,2,51),(61,3,51),(62,2,52),(63,3,52),(66,2,54),(67,6,54),(68,2,55),(69,6,55),(70,2,56),(71,6,56),(72,6,57),(73,6,58),(74,2,59),(75,6,59),(76,6,60),(77,1,53),(78,2,53);
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_color`
--

LOCK TABLES `product_color` WRITE;
/*!40000 ALTER TABLE `product_color` DISABLE KEYS */;
INSERT INTO `product_color` VALUES (32,6,32),(36,3,35),(37,6,35),(38,1,36),(39,3,36),(40,5,36),(41,5,37),(42,2,38),(43,5,38),(44,1,39),(45,2,39),(46,1,40),(47,4,40),(48,5,40),(49,1,41),(50,2,41),(51,3,41),(52,4,41),(53,1,42),(54,3,42),(55,5,42),(56,6,42),(60,4,44),(61,1,45),(62,2,45),(63,3,45),(64,4,45),(65,1,46),(66,1,47),(67,4,47),(68,5,47),(69,1,48),(70,3,48),(71,5,48),(72,1,49),(73,2,49),(74,3,49),(75,4,49),(76,1,50),(77,2,50),(78,3,50),(79,5,50),(80,6,50),(81,1,51),(82,2,51),(83,3,51),(84,4,52),(88,4,54),(89,5,54),(90,4,55),(91,6,55),(92,4,56),(93,4,57),(94,6,57),(95,4,58),(96,1,59),(97,2,59),(98,3,59),(99,3,60),(100,5,60),(101,2,60),(102,1,53),(103,4,53),(104,3,53);
/*!40000 ALTER TABLE `product_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (32,'Bandeja Con Base Porta Laptop',' Bandeja con secciones.Una sección para apoyar la notebooks con 4 posturas de altura y tope. Otra sección para apoyar mouse','72 x 34 cm',11990,'product-1640263380761.jpg',1,3),(34,'Escritorio Judith',' Escritorio Juana. Construido en melanima blanca de 18mm de espesor, con los cantos invertidos a 20 grados. Posee un instructivo impreso para el armado aunque es muy simple. Solo necesitarás un destornillador.','73 x 90 x 60 cm',19990,'product-1640263683846.jpg',3,3),(35,'Escritorio Combinado Infantil',' Pupitre kids. Construido en melamina blanco y roble de 18 mm de espesor. El armado requiere de un destornillador y las patas se ensamblan a rosca. Incluye 2 vasos plasticos de distinto color para poder apoyar lápices o marcadores.','60 x 40 x 65 cm',17990,'product-1640263735133.jpg',2,3),(36,'Escritorio Noa',' Escritorio Milo. Construido en multilaminado de 18 mm de espesor + melamina blanca de 18 mm con los cantos pegados en igual tono. Se entrega desarmado y se arma con llave allen la cual viene incluida con el producto.','90 x 65 x 85 cm',19990,'product-1640263810676.jpg',6,3),(37,'Rack Tv Hope Negro/Roble Natural',' Rack de TV de laminado melamínico de primera calidad de 18 mm de espesor. Posee 2 estantes a la vista y 2 estantes tras las puertas. Las bisagras son metálicas de máxima calidad con sistema de cierre suave, que evita golpes al cerrar. Sistema de ape','135 x 50 x 37 cm',31890,'product-1640263898009.jpg',4,3),(38,'Rack Tv Airin',' El rack de TV Alanis, posee un diseño de origen Nórdico con estilo minimalista y cuenta con 2 estantes y 2 puertas súper cómodas para que puedas guardar de todo. Los muebles de la colección Alanis son ideales para livings, dormitorios y comedores. P','Ancho 140 cm x Alto 53cm x Profundidad 40 cm',41990,'product-1640263964753.jpg',5,3),(39,'Auriculares Bluetooth',' Auriculares Bluetooth Inalámbricos Orejas Gatito Luz Led. Posee conexión por bluetooth, por cable o a través de tarjeta de memoria. Con micrófono incorporado en el auricular y luces LED en las orejas! Ambos funcionan en modo bluetooth. Además de esc','Ancho 18 cm x Alto 19 cm x Prof 8 cm',7900,'product-1640264146875.jpg',3,1),(40,'Bandeja Love Laptop Con Led',' Bandeja porta laptop para niños y niñas. Ideal como lugar de lectura, desayunador, mesa de dibujo, etc. Tiene luz de lectura, porta lápices y ranura para apoyar celular o tablet. La parte de abajo es acolchada para apoyar en las piernas.','48 x 38 cm',6990,'product-1640264265013.jpg',3,2),(41,'Bolsa Hielo Celeste','Bolsa para hielo plegable e impermeable. Para colocar en cualquier parte del cuerpo ya que por su material se amolda donde se coloque. Fácil de lavar y de guardar. 3 colores diferentes. ','21,5 x 9,7 cm',849,'product-1640264337603.jpg',4,2),(42,'Botella Jungle Ac 630ml',' Botella térmica, a prueba de óxido, libre de condensación y no absorbe olores ni sabores. No apta para microondas ni lavavajillas. Tiene doble pared Aislada al vacio. Mantiene la temperatura, frío por 18hs y caliente por 12hs. Boca ancha para cubos ','Alto 25cm, diámetro 7,2cm',3999,'product-1640264400983.jpg',8,1),(44,'Pesa 12kg',' Pesas 12kgrs','20cmx10cm',6000,'product-1640264544947.jpg',6,1),(45,'Valija Carry On',' Valija rígida WILSON con cuatro ruedas dobles siliconadas, carro retractil e interno. Incluye fuelle expandible. Peso: 2,40 kg','49 x 30 x 20 cm',15490,'product-1640264610327.jpg',2,2),(46,'Sombrilla Flamingo',' Sombrilla diseño flamenco, diámetro 1,80 cm. Palo extensible hasta 2,40 cm. Sombrilla de playa fabricada en poliéster premium. Alta durabilidad.','180cm',3890,'product-1640265306342.jpg',1,2),(47,'Banco Plegable',' Banco plegable, ideal para llevar en el auto o en el bolso para estar cómodo en cualquier lugar que vayas. Se puede trabar en diferentes alturas. Posee manija para transportar. Cerrado mide 25,5 cm de diámetro x 6 cm de alto. Abierto mide 25,5 cm de','25,5 x 6 cm',5490,'product-1640265383393.jpg',2,2),(48,'Neceser Travel Colgante',' Neceser de viaje, para ordenar tus cosméticos en un solo lugar en la valija. Posee un gancho para colgar en el baño y tener todo a mano, y manija del lado externo para colgar o sujetar para trasladar. Con abrojos para que no se abra y no se pierda n','26 x 22,5 x 2',1690,'product-1640265471016.jpg',1,2),(49,'Organizador Equipaje',' Set x4 bolsos para clasificar y organizar mejor tu equipaje, ayuda a optimizar tu espacio, cada bolso cuenta con dos cierres. Bolso L 45 x 30 x 11 cm, Bolso M 35 x 27 x 9 cm, Bolso S 30 x 20 x 9 cm, Bolso XS 22 x 15 x 7 cm','45 x 30 x 11 cm',4490,'product-1640265723597.jpg',1,2),(50,'Almohadón Cuello Comfort',' Almohada para cuello, con tela suave al tacto. Sostiene tu mentón manteniendo tu cabeza erguida y descansada. Utilizala de maner lateral, completo o posterior.','37 x 30 x 9 cm',3490,'product-1640265812618.jpg',1,2),(51,'Bolso Airl Jfk',' Bolso de lona de algodón estampado JFK New York. Cierre marrón.','29 x 18 x 10 cm',1390,'product-1640265932944.jpg',4,2),(52,'Identificador Equipaje',' Identificador para maletas. Incluye tarjeta de datos','11 x 6.7 cm',389,'product-1640265999752.jpg',8,2),(53,'Organizador De Cartera Mesh','  Neceser con bolsillos grandes con cierre, bolsillos sin cierre, bolsillos de tela y bolsillos de red ','27 x 17 x 9 cm',990,'product-1643837419612.jpg',1,3),(54,'Humidificador Sphere',' Humificador Vaporizador Aromaterapia Símil Madera USB. Permite que el aire recupere de forma natural su porcentaje ideal de humedad, Eliminando los efectos nocivos del aire seco.\r\nPuede ser usado para perfumar los ambientes con solo añadir unas gota','10cm',2990,'product-1640266174960.jpg',6,3),(55,'Set Cajas New York X2',' Cajas fabricadas en madera con diseño coordenadas New York','Caja chica: 36 x 21.5 x 14 cm / Caja grande: ',7890,'product-1640266245114.jpg',3,3),(56,'Memo Tv',' Pizarra para pared de vidrio con metal. Incluye 4 imanes, un marcador apto para escribir y borrar, y un soporte de marcador con borrador. El vidrio esta montado sobre una chapa de metal, lo que permite que se peguen los imanes y puedas colocar allí ','40 x 30 cm',3290,'product-1640266309509.jpg',1,1),(57,'Decowall Tree',' Aplique para pared fabricado en metal torneado y pintado en diferentes tonos de verdes, marrones y blanco. Posee soporte metálico detrás para colgar en la pared.','118 x 85 cm',24900,'product-1640266366604.jpg',7,1),(58,'Portaretrato',' Portarretrato encofrado 15x20','15x20',1890,'product-1640266453362.jpg',1,3),(59,'Lámpara Lapicero',' Lámpara lapicero de escritorio con ranura para celular. Puede ajustarse en altura y direccionar la luz gracias a tu brazo móvil. Interruptor on/off en su parte trasera y botón táctil en el frente para encender la lámpara. 3 intensidades de luz ilumi','Base: 10.5 x 8.5 cm / Altura: 41 cm',3590,'product-1640266583787.jpg',5,2),(60,'Lámpara Recargable De Mesa',' Lampara de escritorio touch en color verde, con tres niveles de brillo ajustable, tiene tres divisiones para colocar lápices. Brazo flexible y direccionable. Se puede utilizar enchufada a la PC o a la corriente.\r\nO cargar y utilizar desenchufada.\r\nI','40 cm extendida',3890,'product-1640266639042.jpg',4,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'','','filip@gmail.com','2022-04-27',NULL,'$2a$10$cIlmL/fNl.zK4i7IRsJp7uytNgRs3eVtDe539H',NULL,'2147483647'),(4,'tristan','acevedo','tristan@gmail.com','2022-04-27',1,'$2a$10$v0c.I9m6sKYV.aW6kqRLOeAqvhe03sAbuMme8I',NULL,'2147483647'),(6,'orem','Jerez','orem@gmail.com','2022-09-01',NULL,'$2a$10$W64Tov9fG6A9D7xfxJyBfeKbkAkdU1WD4LJhkf',NULL,'2147483647'),(8,'blanca','ruiz','blanca@gmail.com','2022-08-18',NULL,'$2a$10$qNHpprB/HB3PzUwvTq/Mte85TijJuMyKHYOLEjNd0FTOLBFP6g27S','admin','1639945948343_img.png'),(10,'Admin','admin','admin@mail.com','2021-12-23',NULL,'$2a$10$MG7AWhP7F9Ng8IIUi.iZX.A0K4m4MJil4WcZW1LmmTDzBQ41W7xR.','admin','1640289875492_img.png'),(11,'Melina','Bassano','mbassano@gmail.com','1990-02-14',NULL,'$2a$10$anm.JSHV1WW4wIygiTrC5.mdvlmDT.M7Ixc.LUuWvxjfOyylBwbt.',NULL,'1640289972203_img.jpg'),(13,'Jonathan Eskesen','','jona91_eskesen@hotmail.com','2021-12-29',NULL,'$2a$10$gLxwc1Ordi/Tf/MzwLUk1eCiv5WwGjqGUe2OnvDRpOZS22/ZEYdSm',NULL,'1640302334868_img.png'),(14,'tomi','acevedo','tomito@gmail.com','2023-08-19',NULL,'$2a$10$JMxFu3eKwBvi2AArCI3SH.C4nreM2xeIC4lOgDuOFy/zm30f8p8py',NULL,'1640882218769_img.jpeg'),(15,'','','','0000-00-00',NULL,'$2a$10$dXIoVbs4i0799THK5Gs2ceSsvcjlD9BrLhJ6C8Eul8aDxq4/RkrBO',NULL,'avatar-by-default.png'),(22,'alexios','acevedo','all@gmail.com','2021-03-11',NULL,'$2a$10$rPbPLKv33RAUeekczPgkSuNXcCaVwK0AaodxlpG1xrrxn5yyy6O/W',NULL,'1641418093714_img.jpg'),(35,'carla','blancos','carla@gmail.com','2021-06-10',NULL,'$2a$10$.nM4Loa9NpsToRXuPIZqFurq7UqWzQh4DMggSFC0ar4fXX02A7dwy',NULL,'1641421119865_img.jpeg'),(52,'dario','perez','dario@gmail.com','2020-12-10',NULL,'$2a$10$rErQ7hvQA/FnVAzFJldXTeFwMcPKwSoafmGYHjbAsnpBmESSVa/.G','admin','1641677031221_img.jpeg'),(53,'niota','perezo','niota@gmail.com','2022-08-18',NULL,'$2a$10$NThAd4RO5SQW/F9L/v4vKOHTmzsjoPMfSeMWk2D1/yOG.8qdq9iNa','admin','1641942259144_img.jpeg'),(54,'Pablo','Seoane','pablitoseoane@gmail.com','1981-10-14',NULL,'$2a$10$J6ciPIvhHzEexIhpawI5q.AVC6DrcZKQO7Q/lZJzjf47OjhIf0bUK','admin','1642718815127_img.jpg'),(55,'Sebastian','Seoane','sebastian@seoane.com','1979-10-06',NULL,'$2a$10$YOw2DOUtb0wfsB3uuzx2ju9n4BYZLxabaUOGo3I595buVAv9KkzW2',NULL,'1643836465747_img.jpeg'),(56,'Juan','Velazquez','juan@seoane.com','1990-05-06',NULL,'$2a$10$QkYP9V70p8KreIpUYqd/ae1Ot8uxDMRCI7nIe3MmEqrL2LxQLaQ7C',NULL,'1643836504494_img.jpeg'),(57,'Maria Eugenia','Lopez','Maria@seoane.com','1980-06-13',NULL,'$2a$10$dlfA2P2N59jwcvb0IHuhleOK9YpNC2Jbk0nb9NkYVsmg3OH68p/Ly',NULL,'1643836547800_img.jpeg'),(58,'Walter','Lescano','walter@seoane.com','1970-12-13',NULL,'$2a$10$jS5OLwiYDB5ORvA8I7PVHODiuhkMyeeb91cwGh1u1n5xzzcVzVYvm',NULL,'1643836599759_img.jpeg'),(59,'Andrea','Ripoli','andrea@seoane.com','2020-01-01',NULL,'$2a$10$ExPl//ZDjW3zxHhwCGqbceIcjE3d98m3q7ur2EuVMoNYQ9W4K4fCu',NULL,'1643836632435_img.jpeg'),(60,'Mariana','Benitez','matias@seoane.com','2006-06-06',NULL,'$2a$10$ugou7s9Qs0Vm.oZhjbxDvuGBKz/pUzrIcWHbOxtouw0dykeKaDR86',NULL,'1643836683472_img.jpeg'),(61,'Estefania','Fania','estefania@seoane.com','1950-01-01',NULL,'$2a$10$j9f0HPoc4i8VrbSWCqFH0utnX0rBNqojMF1ILuiK66M.mthCs8AM6',NULL,'1643836720034_img.jpeg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-02 18:48:53
