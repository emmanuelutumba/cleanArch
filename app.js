const express = require("express");
const app = express();

app.use(express.json());
app.use("/",require("./src/controller/userController")(express));

app.listen(8080, () => {
    console.log("Server is running");
})