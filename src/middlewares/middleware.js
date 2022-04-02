const otpGenerator = require('otp-generator')

module.exports = function (req, res, next) {
  const { email, password } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  // if (req.path === "/access") {
  //   if (![username, password].every(Boolean)) {
  //     return res.json("Missing Credentials");
  //   }
  // }

   const opt  = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

  next();
};
