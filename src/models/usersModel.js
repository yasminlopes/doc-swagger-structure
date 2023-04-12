const users = [
  { id: 1, username: "yasmin", email: "yasmin@email.com" },
  { id: 2, username: "lucas", email: "lucas@email.com" },
  { id: 3, username: "isabelle", email: "isabelle@email.com" },
  { id: 4, username: "bruno", email: "bruno@email.com" },
  { id: 5, username: "joao", email: "joao@email.com" },
];

const getAllUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const createUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
  return user;
};

const updateUser = (id, updatedUser) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { id, ...updatedUser };
    return users[index];
  }
  return null;
};

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const deletedUser = users[index];
    users.splice(index, 1);
    return deletedUser;
  }
  return null;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
