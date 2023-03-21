-- CreateTable
CREATE TABLE `sdb` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sdb_kunci` VARCHAR(25) NOT NULL,
    `sdb_ukuran` VARCHAR(10) NOT NULL,
    `sdb_status` VARCHAR(10) NOT NULL,
    `sdb_lok_cabang` VARCHAR(10) NOT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `sdb_sdb_kunci_key`(`sdb_kunci`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
