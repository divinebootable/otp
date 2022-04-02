const express = require("express");

const router = require("express").Router();
const loginValidate = require("../middlewares/middleware.js");
const accountController = require("../controllers/user.js");

router.post("/add_account", accountController.createAccount);
router.post("/verify_account", accountController.verifyAccount);
router.put("/access", accountController.signIn)
router.get("/get_account", accountController.getAccount)

module.exports = router;