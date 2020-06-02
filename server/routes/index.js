const { Router } = require("express");
const router = Router();

const { getProjects } = require("../controllers/index.controllers");

router.get("/projects", getProjects);

module.exports = router;
