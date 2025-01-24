import { News } from "@prisma/client";

const { placeHolderNews } = require("./placeholderNews");
const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();

async function main() {
  await Promise.all(
    placeHolderNews.map(async (news:News) => {
      await prismaClient.news.upsert({
        where: {
          slug: news.slug,
        },
        update: news,
        create: news,
      });
    }),
  );
}

main()
  .then(async () => { 
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error while seeding database:", e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
