const userModel = require("../models/usersModel");

const getAllUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res
    .status(200)
    .json({ message: "All users successfully listed!", data: users });
}

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = userModel.getUserById(parseInt(id));
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json({ message: "User listed successfully!", data: user })
  }
}

const createUser = (req, res) => {
  const user = req.body;
  const newUser = userModel.createUser(user)
  res
    .status(201)
    .json({ message: "User created successfully!", data: newUser })
}

const updateUser = (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  const user = userModel.updateUser(parseInt(id), updatedUser);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json({ message: "User updated successfully!", data: user })
  }
}

const deleteUser = (req, res) => {
  const { id } = req.params;
  const deletedUser = userModel.deleteUser(parseInt(id));
  if (!deletedUser) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json({ message: "User deleted successfully!" })
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
