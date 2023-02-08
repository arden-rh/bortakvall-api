-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 08, 2023 at 06:46 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inl_bortakvall`
--

-- --------------------------------------------------------

--
-- Table structure for table `Order`
--

CREATE TABLE `Order` (
  `id` int(10) UNSIGNED NOT NULL,
  `customer_first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_postcode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_total` int(11) NOT NULL,
  `customer_last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Order`
--

INSERT INTO `Order` (`id`, `customer_first_name`, `customer_address`, `customer_postcode`, `customer_city`, `customer_email`, `customer_phone`, `order_total`, `customer_last_name`) VALUES
(39, 'Testy', 'Hemma 2B', '211 76', 'Malmö', 'email@here.com', NULL, 40, 'Testsson'),
(40, 'Testy', 'Hemma 2B', '211 76', 'Malmö', 'email@here.com', NULL, 44, 'Testsson');

-- --------------------------------------------------------

--
-- Table structure for table `OrderItem`
--

CREATE TABLE `OrderItem` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `item_price` int(10) UNSIGNED NOT NULL,
  `item_total` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `OrderItem`
--

INSERT INTO `OrderItem` (`id`, `order_id`, `product_id`, `qty`, `item_price`, `item_total`) VALUES
(113, 39, 1, 3, 8, 24),
(114, 39, 3, 2, 8, 16),
(115, 40, 1, 1, 8, 8),
(116, 40, 2, 3, 12, 36);

-- --------------------------------------------------------

--
-- Table structure for table `Product`
--

CREATE TABLE `Product` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `on_sale` tinyint(1) DEFAULT NULL,
  `images` json NOT NULL,
  `stock_status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock_quantity` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Product`
--

INSERT INTO `Product` (`id`, `name`, `description`, `price`, `on_sale`, `images`, `stock_status`, `stock_quantity`) VALUES
(1, 'Banana Bubs', '<p>Banan/gräddkola</p>\n<p>Innehållsförteckning: Glukos-fruktossirap, socker, majsstärkelse, vatten, surhetsreglerande medel (äppelsyra, natriumcitrat), potatisprotein, aromämnen, färgämnen: (E150d, E100), kokosolja, ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n', 8, 0, '{\"large\": \"/storage/products/156622.png\", \"thumbnail\": \"/storage/products/thumbnails/156622-300x300.png\"}', 'instock', 8),
(2, 'Gott & Blandat Giants', '<p>En mix av lakrits och gelé med fruktsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, glukos-fruktossirap, stärkelse, VETEMJÖL, melass, syra (citronsyra), fuktighetsbevarande medel (sorbitoler, glycerol), lakritsextrakt, salt, vegetabiliska oljor (kokos, palm), aromer, färgämnen (E153, E120, E100, E141), ytbehandlingsmedel (bivax), stabiliseringsmedel (E471).</p>\n<p><em>Alla priser är per skopa.</em></p>\n', 12, 0, '{\"large\": \"/storage/products/1997509.png\", \"thumbnail\": \"/storage/products/thumbnails/1997509-300x300.png\"}', 'instock', 5),
(3, 'Banana Splits', '<p>Fyllig vitchoklad med smak av kola krispig banan.</p>\n<p>Innehållsförteckning: Socker, kakaosmör, torkad banan, HELMJÖLKSPULVER, mjölksocker(LAKTOS), SKUMMJÖLKSPULVER, emulgeringsmedel E322 (SOJALECITIN), naturliga aromer, ytbehandlingsmedel (E414, E904).</p>\n<p>Kan innehålla spår av MANDEL, NÖTTER och VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n', 8, 0, '{\"large\": \"/storage/products/3827741.png\", \"thumbnail\": \"/storage/products/thumbnails/3827741-300x300.png\"}', 'instock', 6);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('b1142c1a-6d00-4a59-84b1-8a2849101e24', '49c1e961fb8160b719190f3ed56f49c88ca15e7b79214a6febe5853d8250847d', '2023-02-06 23:02:53.502', '20230203123847_init', NULL, NULL, '2023-02-06 23:02:53.454', 1),
('c8cc2677-c314-43f1-b5b7-d241d2c70776', '4bc79b260079a42ea78e1f2cd3aa5ed87a3642505fd1382f5405b5c6f639c5b0', '2023-02-06 23:03:02.101', '20230206230302_unique_name_product', NULL, NULL, '2023-02-06 23:03:02.082', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Order`
--
ALTER TABLE `Order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `OrderItem`
--
ALTER TABLE `OrderItem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `OrderItem_product_id_fkey` (`product_id`),
  ADD KEY `OrderItem_order_id_fkey` (`order_id`);

--
-- Indexes for table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Product_name_key` (`name`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Order`
--
ALTER TABLE `Order`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `OrderItem`
--
ALTER TABLE `OrderItem`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `Product`
--
ALTER TABLE `Product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `OrderItem`
--
ALTER TABLE `OrderItem`
  ADD CONSTRAINT `OrderItem_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderItem_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
