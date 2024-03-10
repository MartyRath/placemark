import dotenv from "dotenv";
import { db } from "../models/db.js";
import { UserSpec, UserCredentialsSpec } from "../models/joi-schemas.js";

export const accountsController = {
  index: {
    auth: false,
    handler: function (request, h) {
      return h.view("main", { title: "Welcome to Champion Trees" });
    },
  },
  showSignup: {
    auth: false,
    handler: function (request, h) {
      return h.view("signup-view", { title: "Sign up for Champion Trees" });
    },
  },
  signup: {
    auth: false,
    validate: {
      payload: UserSpec, // Which Joi schema to use
      options: { abortEarly: false }, // Check for all errors
      failAction: function (request, h, error) {
        return h.view("signup-view", { 
          title: "Sign up error", 
          errors: error.details 
        }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const user = request.payload;
      await db.userStore.addUser(user);
      return h.redirect("/");
    },
  },
  showLogin: {
    auth: false,
    handler: function (request, h) {
      return h.view("login-view", { title: "Login to Champion Trees" });
    },
  },
  login: {
    auth: false,
    validate: {
      payload: UserCredentialsSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("login-view", { title: "Log in error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const { email, password } = request.payload;
      const user = await db.userStore.getUserByEmail(email);
      if (email === process.env.admin_email && password === process.env.admin_password) {
        request.cookieAuth.set({ id: user._id });
        return h.redirect("/admin");
      }
        if (!user || user.password !== password) {
            return h.redirect("/");
        }
        request.cookieAuth.set({ id: user._id });
        return h.redirect("/dashboard");
    }
  },
  logout: {
    auth: false,
    handler: function (request, h) {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },

  async validate(request, session) {
    const user = await db.userStore.getUserById(session.id);
    if (!user) {
      return { isValid: false };
    }
    return {isValid: true, credentials: user };
  },

};