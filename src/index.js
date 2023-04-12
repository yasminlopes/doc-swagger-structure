const express = require("express");
const config = require("./config/config");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swaggerConfig");

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
