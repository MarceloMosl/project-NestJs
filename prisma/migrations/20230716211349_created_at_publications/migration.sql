-- AlterTable
ALTER TABLE "publications" ADD COLUMN     "createdAt" TEXT NOT NULL DEFAULT now();
