const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 15000,
    category: "Accessories",
    inStock: true
  },
  {
    id: 2,
    name: "Mouse",
    price: 8000,
    category: "Accessories",
    inStock: true
  },
  {
    id: 3,
    name: "Monitor",
    price: 33333,
    category: "Monitors",
    inStock: false
  },
  {
    id: 4,
    name: "PC",
    price: 222,
    category: "Computers",
    inStock: true
  },
  {
    id: 5,
    name: "PC-monitor",
    price: 666666,
    category: "Monitors",
    inStock: true
  },
];

export function getAllProducts(filters) {
  let result = products;

  const { minPrice, maxPrice, inStock, category } = filters;

  if (minPrice !== undefined) {
    result = result.filter(
      product => product.price >= Number(minPrice)
    );
  }

  if (maxPrice !== undefined) {
    result = result.filter(
      product => product.price <= Number(maxPrice)
    );
  }

  if (inStock !== undefined) {
    result = result.filter(
      product => product.inStock === (inStock === "true")
    );
  }

  if (category) {
    result = result.filter(
      product => product.category === category
    );
  }

  return result;
};

export function findProductById (id) {
    return products.find((product) => product.id === id);
};

export function addProduct(data) {
    const product = {
        id: products.length + 1,
        ...data
    };
    products.push(product);
    return product;
};

export function updatePorductById(id, changes) {
    const product = products.find(product => 
        product.id === id
    );
    if(!product) {
        return null;
    };
    Object.asssign(product, changes);
    return product;
};

export function deleteProductsById(id) {
    const index = products.findIndex( product => product.id === id
    );

    if (index === -1) { return null;
    }

    const deletedProduct = products[index]; products.splice(index, 1);
    return deletedProduct;
};