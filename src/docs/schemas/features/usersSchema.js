module.exports = {
  type: "object",
  properties: {
    username: {
      type: "string",
      minLength: 5,
      maxLength: 15,
      description: "User identifier",
      example: "fulano",
    },
    email: {
      type: "string",
      minLength: 1,
      maxLength: 40,
      description: "User e-mail",
      example: "fulano@email.com",
    },
  },
  required: ["username", "email"],
};
