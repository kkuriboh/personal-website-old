-- CreateEnum
CREATE TYPE "Role" AS ENUM ('POSTER', 'REGULAR_USER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "tags" TEXT[],
    "author_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "sub_heading" TEXT,
    "sumary" TEXT,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TextSection" (
    "id" TEXT NOT NULL,
    "order_of_priority" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "section_id" TEXT NOT NULL,

    CONSTRAINT "TextSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeadingSection" (
    "id" TEXT NOT NULL,
    "order_of_priority" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "summary" TEXT,
    "section_id" TEXT NOT NULL,

    CONSTRAINT "HeadingSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MidiaSection" (
    "id" TEXT NOT NULL,
    "order_of_priority" INTEGER NOT NULL,
    "link" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "section_id" TEXT NOT NULL,

    CONSTRAINT "MidiaSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CodeSection" (
    "id" TEXT NOT NULL,
    "order_of_priority" INTEGER NOT NULL,
    "summary" TEXT,
    "content" TEXT NOT NULL,
    "section_id" TEXT NOT NULL,

    CONSTRAINT "CodeSection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TextSection" ADD CONSTRAINT "TextSection_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeadingSection" ADD CONSTRAINT "HeadingSection_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MidiaSection" ADD CONSTRAINT "MidiaSection_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSection" ADD CONSTRAINT "CodeSection_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
