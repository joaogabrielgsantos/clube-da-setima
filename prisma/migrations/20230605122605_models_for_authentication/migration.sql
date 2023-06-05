-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "cep" VARCHAR(120) NOT NULL,
    "street" VARCHAR(120) NOT NULL,
    "city" VARCHAR(120) NOT NULL,
    "state" VARCHAR(120) NOT NULL,
    "number" VARCHAR(10) NOT NULL,
    "neighbourhood" VARCHAR(120) NOT NULL,
    "addressDetail" VARCHAR(120) NOT NULL,
    "enrollmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),
    "updatedAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),

    CONSTRAINT "addresses_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enrollments" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "nickname" VARCHAR(120) NOT NULL,
    "birthday" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),
    "updatedAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),

    CONSTRAINT "enrollments_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keys" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),
    "updatedAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),
    "isValid" BOOLEAN NOT NULL,

    CONSTRAINT "keys_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "creadtedAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),
    "updatedAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),

    CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "createdAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),
    "updatedAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),

    CONSTRAINT "types_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "password" VARCHAR(120) NOT NULL,
    "typeId" INTEGER NOT NULL DEFAULT 1,
    "keyId" INTEGER,
    "createdAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),
    "updatedAt" TIMESTAMP(6) DEFAULT (now() AT TIME ZONE 'BRT'::text),

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "keys_name_key" ON "keys"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_fk0" FOREIGN KEY ("enrollmentId") REFERENCES "enrollments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "keys" ADD CONSTRAINT "keys_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fk1" FOREIGN KEY ("keyId") REFERENCES "keys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
