-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "foodImg" TEXT NOT NULL,
    "foodTitle" TEXT NOT NULL,
    "foodDescription" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu" (
    "id" TEXT NOT NULL,
    "foodImg" TEXT NOT NULL,
    "foodTitle" TEXT NOT NULL,
    "foodDescription" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specials" (
    "id" TEXT NOT NULL,
    "foodImg" TEXT NOT NULL,
    "foodTitle" TEXT NOT NULL,
    "foodDescription" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "specials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
