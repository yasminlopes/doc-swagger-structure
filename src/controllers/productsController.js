const productsModel = require("../models/productsModel");

const getAllProducts = (req, res) => {
  const products = productsModel.getAllProducts();
  res
    .status(200)
    .json({ message: "All products successfully listed!", data: products });
}

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = productsModel.getProductById(parseInt(id));
  if (!product) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.status(200).json({ message: "Product listed successfully!", data: product })
  }
}

const createProduct = (req, res) => {
  const product = req.body;
  const newProduct = productsModel.createProduct({ name: product.name, price: product.price });
  res
    .status(201)
    .json({ message: "Product created successfully!", data: newProduct })
}

const updateProduct = (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  const product = productsModel.updateProduct(parseInt(id), updatedProduct);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.status(200).json({ message: "Product updated successfully!", data: product })
  }
}

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const deletedProduct = productsModel.deleteProduct(parseInt(id));
  if (!deletedProduct) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.status(200).json({ message: "Product deleted successfully!" })
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
