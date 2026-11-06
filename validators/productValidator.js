export function validateProductData(data = {}) {
  const errors = [];

  if (typeof data.name !== "string" || !data.name.trim()) {
    errors.push("name is required");
  }

  if (typeof data.price !== "number" || data.price <= 0) {
    errors.push("price must be greater than 0");
  }

  if (!Number.isInteger(data.categoryId) || data.categoryId <= 0) {
    errors.push("categoryId must be a positive integer");
  }

  if (typeof data.inStock !== "boolean") {
    errors.push("inStock must be boolean");
  }

  return errors;
}