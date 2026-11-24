-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'RESPONDED', 'CLOSED', 'SPAM');

-- CreateTable
CREATE TABLE "enquiries" (
    "id" TEXT NOT NULL,
    "reference_number" VARCHAR(32) NOT NULL,
    "full_name" VARCHAR(120) NOT NULL,
    "email" VARCHAR(180) NOT NULL,
    "service" VARCHAR(40) NOT NULL,
    "subject" VARCHAR(160) NOT NULL,
    "message" TEXT NOT NULL,
    "country_of_residence" VARCHAR(100),
    "destination_country" VARCHAR(100),
    "preferred_contact" VARCHAR(20),
    "status" "EnquiryStatus" NOT NULL DEFAULT 'NEW',
    "privacy_acknowledged" BOOLEAN NOT NULL DEFAULT false,
    "assigned_to" VARCHAR(120),
    "internal_notes" TEXT,
    "last_responded_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "enquiries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "enquiries_reference_number_key" ON "enquiries"("reference_number");

-- CreateIndex
CREATE INDEX "idx_enquiries_status_created_at" ON "enquiries"("status", "created_at");

-- CreateIndex
CREATE INDEX "idx_enquiries_service_created_at" ON "enquiries"("service", "created_at");

-- CreateIndex
CREATE INDEX "idx_enquiries_email" ON "enquiries"("email");

