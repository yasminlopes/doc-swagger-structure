module.exports = {
    "/users": {
      get: {
        tags: ["Users"],
        summary: "Returns all users on the system",
        description: "Some description about the **route**",
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/schemas/users",
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
  
    "/user/{user_id} ": {
      get: {
        tags: ["Users"],
        summary: "Returns a specific user",
        description: "Some description about the **route**",
        parameters: [
          {
            name: "user_id",
            in: "path",
            description: "User ID",
            required: true,
            type: "integer",
          }
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/schemas/users",
                },
              },
            },
          },
          404: {
            $ref: "#responses/notFound"
          },
        },
      },
    },
  
    "/user": {
      post: {
        tags: ["Users"],
        summary: "Create a new user",
        description: "Some description about the **route**",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/users",
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
                  $ref: "#/schemas/users",
                },
              },
            },
          },
          400: {
            $ref: "#responses/badRequest"
          },
          404: {
            $ref: '#responses/notFound'
          },
          500: {
            $ref: '#responses/serverError'
          },
          409: {
            $ref: "#responses/conflict"
          }
        },
      }
    },
  
    "/user/{user_id}  ": {
      put: {
        tags: ["Users"],
        summary: "Update some existing user information",
        description: "Some description about the **route**",
        parameters: [
          {
            name: "user_id",
            in: "path",
            description: "User ID",
            required: true,
            type: "integer",
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/schemas/users",
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
                  $ref: "#/schemas/users",
                },
              },
            },
          },
          400: {
            $ref: "#responses/badRequest"
          },
          404: {
            $ref: '#responses/notFound'
          },
          500: {
            $ref: '#responses/serverError'
          },
          409: {
            $ref: "#responses/conflict"
          }
        },
      }
    },
  
    "/user/{user_id}": {
      delete: {
        
        tags: ["Users"],
        summary: "Delete a user",
        description: "Some description about the **route**",
        parameters: [
          {
            name: "user_id",
            in: "path",
            description: "User ID",
            required: true,
            type: "integer",
          }
        ],
        responses: {
          200: {
            description: "Success",
          },
          404: {
            $ref: "#responses/notFound"
          },
          400: {
            $ref: "#responses/badRequest"
          },
          500: {
            $ref: '#responses/serverError'
          },
        },
      },
    }  
  }
  