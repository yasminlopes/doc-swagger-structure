module.exports = {
  "/products": {
    get: {
      tags: ["Products"],
      summary: "Returns all products on the system",
      description: "Some description about the **route**",
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/schemas/products",
                },
              },
            },
          },
        },
        404: {
          $ref: "#responses/notFound",
        },
        400: {
          $ref: "#responses/badRequest",
        },
        500: {
          $ref: "#responses/serverError",
        },
      },
    },
  },

  "/product/{product_id}": {
    get: {
      tags: ["Products"],
      summary: "Returns a specific product",
      description: "Some description about the **route**",
      parameters: [
        {
          name: "product_id",
          in: "path",
          description: "Product ID",
          required: true,
          type: "integer",
        },
      ],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/products",
              },
            },
          },
        },
        404: {
          $ref: "#responses/notFound",
        },
      },
    },
  },

  "/product": {
    post: {
      tags: ["Products"],
      summary: "Create a new product",
      description: "Some description about the **route**",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/products",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/products",
              },
            },
          },
        },
        400: {
          $ref: "#responses/badRequest",
        },
        404: {
          $ref: "#responses/notFound",
        },
        500: {
          $ref: "#responses/serverError",
        },
        409: {
          $ref: "#responses/conflict",
        },
      },
    },
  },

  "/product/{product_id}  ": {
    put: {
      tags: ["Products"],
      summary: "Update some existing product information",
      description: "Some description about the **route**",
      parameters: [
        {
          name: "product_id",
          in: "path",
          description: "Product ID",
          required: true,
          type: "integer",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/products",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/products",
              },
            },
          },
        },
        400: {
          $ref: "#responses/badRequest",
        },
        404: {
          $ref: "#responses/notFound",
        },
        500: {
          $ref: "#responses/serverError",
        },
        409: {
          $ref: "#responses/conflict",
        },
      },
    },
  },

  "/product/{product_id}   ": {
    delete: {
      tags: ["Products"],
      summary: "Delete a product",
      description: "Some description about the **route**",
      parameters: [
        {
          name: "product_id",
          in: "path",
          description: "Product ID",
          required: true,
          type: "integer",
        },
      ],
      responses: {
        200: {
          description: "Success",
        },
        404: {
          $ref: "#responses/notFound",
        },
        400: {
          $ref: "#responses/badRequest",
        },
        500: {
          $ref: "#responses/serverError",
        },
      },
    },
  },
};
