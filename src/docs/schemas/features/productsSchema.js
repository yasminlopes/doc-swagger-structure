module.exports = {
    type: "object",
    properties: {
      name: {
        type: "string",
        minLength: 5,
        maxLength: 255,
        description: "Product name",
        example: "Product ABC",
      },
      price: {
        type: "number",
        description: "Product price",
        example: 10,
      },
    },
    required: ["name", "price"],
  }
  