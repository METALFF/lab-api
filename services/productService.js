import { prisma } from "../config/prisma.js"
export async function getAllProducts() {
  return await prisma.product.findMany({
    include: {
      category: true,
    },
  });
};

export async function findProductById(id) {
    return await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
};

export async function addProduct(data) {
    return await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        Instock: data.Instock,
        categoryId: data.categoryId,
      },
      include: {
        category: true,
      },
    });
};

export async function updatePorductById(id, data) {
    return await prisma.product.update({
      where: {id},
      data,
    });
    
};

export async function deleteProductByIdService(id) {
    return await prisma.product.delete({
      where: {id},
    });
};
