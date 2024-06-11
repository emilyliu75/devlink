const express = require("express");

const UsersController = require("../controllers/users");

const router = express.Router();

router.post("/", UsersController.create);
router.post("/sendrequest", UsersController.addUsertoRequests);
router.get("/", UsersController.getAllUsers);

module.exports = router;
