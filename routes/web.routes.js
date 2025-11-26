const express = require("express");
const router = express.Router();
const webController = require("../controllers/web.controller");

// Rutas web
router.get("/", webController.home);
router.get("/about", webController.about);
router.get("/location", webController.location);
router.get("/mission", webController.mission);
router.get("/contact", webController.contact);
router.post("/contact", webController.submitContact);

module.exports = router;
