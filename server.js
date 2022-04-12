/**
 * File: server.js
 * Description: Two Factor Authentication
 * Date: 21/3/20202
 * Author: Monyuy Divine Kongadzem
 */
const app = require("./src/app");
//require("dotenv").config();


const port = process.env.PORT || 8080;


app.listen(port, () => {
  console.log("server is runing on port ", port);
});