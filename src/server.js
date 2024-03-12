import Hapi from "@hapi/hapi";
import Vision from "@hapi/vision";
import path from "path";
import Handlebars from "handlebars";
import Inert from "@hapi/inert";
import HapiSwagger from "hapi-swagger";
import { fileURLToPath } from "url";
import Cookie from "@hapi/cookie";
import dotenv from "dotenv";
import Joi from "joi";
import jwt from "hapi-auth-jwt2";
import { validate } from "./api/jwt-utils.js";
import { apiRoutes } from "./api-routes.js";
import { accountsController } from "./controllers/accounts-controller.js";
import { db } from "./models/db.js";
import { webRoutes } from "./web-routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check for .env file. If not available, terminate program.
const result = dotenv.config();
if (result.error) {
  console.log(result.error.message);
  // process.exit(1);
}

const swaggerOptions = {
  info: {
    title: "Playtime API",
    version: "0.1",
  },
  // Adding authorise option to documentation
  securityDefinitions: {
    jwt: {
      type: "apiKey",
      name: "Authorization",
      in: "header"
    }
  },
  security: [{ jwt: [] }]
};

async function init() {
  let port;
  let host;
// If process.env.PORT is available, will choose that, otherwise defaults to localhost and 3000
  if (process.env.PORT) {
    port = process.env.PORT;
    host = "0.0.0.0"
  }
  else {
    port = 3000;
    host = "localhost";
  }

  const server = Hapi.server({
    port: port,
    host: host,
});

  await server.register(Vision);
  await server.register(Cookie);
  await server.register(Inert);
  await server.register(jwt);

  server.auth.strategy("jwt", "jwt", {
    key: process.env.cookie_password,
    validate: validate,
    verifyOptions: { algorithms: ["HS256"] }
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);
  
  server.validator(Joi);

  server.auth.strategy("session", "cookie", {
    cookie: {
      name: process.env.cookie_name,
      password: process.env.cookie_password,
      isSecure: false,
    },
    redirectTo: "/",
    validate: accountsController.validate,
  });
  server.auth.default("session");
  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: "./views",
    layoutPath: "./views/layouts",
    partialsPath: "./views/partials",
    layout: true, // each page will use layout template
    isCached: false,
  });
  db.init("mongo");
  server.route(webRoutes);
  server.route(apiRoutes);
  await server.start();
  console.log("Server running on %s", server.info.uri);
}


process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();