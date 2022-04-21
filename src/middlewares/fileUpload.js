const path = require("path");

module.exports = function (req, res, next) {
  console.log(req);
  let name;
  let data;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  name = req.files.pic.name;
  pic = req.files.pic.pic
  console.log(sampleFile);

  req.body = name;
  req.body = pic
  next();
};