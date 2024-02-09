-- CreateEnum
CREATE TYPE "crops" AS ENUM ('SOYBEANS', 'CORN', 'COTTON', 'COFFEE', 'SUGARCANE');

-- CreateEnum
CREATE TYPE "states" AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');

-- CreateTable
CREATE TABLE "producer" (
    "id" TEXT NOT NULL,
    "cpf" TEXT,
    "cnpj" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "producer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" "states" NOT NULL,
    "total_area" DOUBLE PRECISION NOT NULL,
    "arable_area" DOUBLE PRECISION NOT NULL,
    "vegetation_area" DOUBLE PRECISION NOT NULL,
    "crops" "crops"[],
    "producerId" TEXT,

    CONSTRAINT "farm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "producer_cpf_key" ON "producer"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "producer_cnpj_key" ON "producer"("cnpj");

-- AddForeignKey
ALTER TABLE "farm" ADD CONSTRAINT "farm_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
