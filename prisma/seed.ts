import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      { name: "Accessories" },
      { name: "Monitors" },
      { name: "Computers" },
      { name: "Components" },
    ],
    skipDuplicates: true,
  });
    const products = await prisma.product.createMany({
    data: [
        {
        name: "Keyboard",
        price: 15000,
        Instock: true,
        categoryId: 1,
        },
        {
        name: "Mouse",
        price: 8000,
        Instock: true,
        categoryId: 1,
        },
        {
        name: "Monitor",
        price: 85000,
        Instock: false,
        categoryId: 2,
        },
        {
        name: "Laptop",
        price: 420000,
        Instock: true,
        categoryId: 3,
        },
        {
        name: "SSD 2TB",
        price: 65000,
        Instock: true,
        categoryId: 4,
        },
    ],
    skipDuplicates: true,
    });
    console.log(products);
    console.log(categories);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());