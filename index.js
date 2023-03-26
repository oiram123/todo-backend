const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

connectDB(); //connecting with mongo

//Swagger documentation
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

//Load env variables
dotenv.config({path: "./config/config.env"})

//Router files
const auth = require("./routes/auth")

//swager options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "To Do app",
      version: "3.0.0",
      description: "A To Do web applcation",
    },

    servers: [
      {
        url: "http://localhost:3001/api/v1",
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

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// For accepting post form data
const bodyParser = require("express").json;

//documentation path
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(bodyParser())
app.use(cors());


//load routes
app.use("/api/v1/auth", auth);

const port = 3001;

app.get("api/v1/", function (req, res) {
  res.send("Welcome to ToDo application");
});

app.listen(port, console.log(`Server running in port ${port}`));

