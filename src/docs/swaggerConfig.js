const swaggerJSDoc = require("swagger-jsdoc");
const paths = require("./paths/index");
const schemas = require("./schemas/index");
const responses = require("./responses/index");
const tags = require('./tags');

const swaggerOptions= {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger Example API",
      description: "Esse é um exemplo de como construir uma documentação objetiva com o Swagger utilizando uma arquitetura limpa.",
      version: "1.0.0",
      contact: {
        name: "Contato",
        url: "https://www.linkedin.com/in/yasmin-lopes-841b601a1/",
      },
    },
    externalDocs: {
      description: "Medium",
      url: "https://medium.com/@yasmin.lopes",
    },
    servers: [
      {
        url: "/api",
        description: "Servidor Principal",
      },
    ],
    security: [{
      apiKeyAuth: []
    }],
    tags: tags,
    paths: paths,
    schemas: schemas,
    responses: responses,
  },
  apis: [],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
module.exports = swaggerSpec;