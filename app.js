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
 
 const ipFn = require("./middleware/getIpAddress");
 app.use("*",ipFn);
 
 /* Methods */
 app.get("/", (req, res, next) => {
     res.send("welcome to academic rest api");
 });
 
 //falta implementar la ruta de os
 const osRoutes = require("./routes/os.routes");
 const MobileRoutes = require("./routes/mobile_device.routes");
 
 MobileRoutes.mobileDeviceRoutes(app);
 osRoutes.osRoutes(app);
 
 const osRoutes = require("./routes/os.routes");
 osRoutes.osRoutes(app);

 app.listen(port, () =>{
     console.log("Server is running..")
 });