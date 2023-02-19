/* packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/* app configuration */
const app = express();
const port = config.get("server-port");
const  jsonParser = bodyParser.json();
const  urlEncodeParser = bodyParser.urlencoded(
    {extended: true}
 );

 app.use(jsonParser);
 app.use(urlEncodeParser);
 
 
 /* Methods */
 app.get("/", (req, res, next) => {
     res.send("welcome to academic rest api");
 });
 
 const osRoutes = require("./routes/os.routes");
 const MobileRoutes = require("./routes/mobile_device.routes");
 
 MobileRoutes.mobileDeviceRoutes(app);
 osRoutes.osRoutes(app);
 
 app.listen(port, () =>{
     console.log("Server is running..")
 });