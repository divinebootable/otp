const express = require("express");

const router = require("express").Router();;

router.get("/", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Chicam API Node.js + PostgreSQL + Express!",
    version: "1.0.0",
  });
});

module.exports = router;