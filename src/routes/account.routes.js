const express = require("express");

const router = require("express").Router();
const loginValidate = require("../middlewares/middleware.js");
const accountController = require("../controllers/account.js");

router.post("/credit_account", accountController.creditAcount);
router.get("/getAccount/:users", accountController.getAccountId);
router.get("/allAccounts", accountController.getAllAccount)

module.exports = router;