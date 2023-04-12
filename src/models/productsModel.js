const products = [
  { id: 1, name: "Product A", price: 10.0 },
  { id: 2, name: "Product B", price: 20.0 },
  { id: 3, name: "Product C", price: 30.0 },
  { id: 4, name: "Product D", price: 40.0 },
  { id: 5, name: "Product E", price: 50.0 },
];

const getAllProducts = () => products;

const getProductById = (id) => products.find((product) => product.id === id);

const createProduct = (product) => {
  product.id = products.length + 1;
  products.push(product);
  return product;
};

const updateProduct = (id, updatedProduct) => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products[index] = { id, ...updatedProduct };
    return products[index];
  }
  return null;
};

const deleteProduct = (id) => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    const deletedProduct = products[index];
    products.splice(index, 1);
    return deletedProduct;
  }
  return null;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
