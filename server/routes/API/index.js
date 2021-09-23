const express = require("express");
const route = express.Router();
const ApiController = require("../../controllers/ApiController");
route.post("/register", ApiController.register);
route.post("/login", ApiController.login);
route.get("/jobs/:page?", ApiController.getData);
route.get("/jobs/search", ApiController.searchJob);
route.get("/job-detail/:id", ApiController.getDetailJob);

module.exports = route;
