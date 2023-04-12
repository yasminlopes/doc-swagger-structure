const express = require("express");
const config = require("./config/config");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swaggerConfig");

const app = express();
app.use(express.json());

const userRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");

app.use("/api", userRoutes);
app.use("/api", productsRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
