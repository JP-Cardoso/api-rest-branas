const express = require("express");
const router = require("./routers/postRoute");
const app = express();

app.use(router);

app.listen(3000);