const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB(); //connecting with mongo

//Swagger documentation
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

//swager options
const options = {
  definition: {
    openapi: "1.0.0",
    info: {
      title: "To Do app",
      version: "1.0.0",
      description: "A To Do web applcation",
    },

    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Local server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

const port = 3000;

app.get("api/v1/", function (req, res) {
  res.send("Welcome to ToDo application");
});

app.listen(port, console.log(`Server running in port ${port}`));

