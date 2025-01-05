const express = require("express");
const app = express();

app.use('/', require("./routers/postRoute"));

app.listen(3000);