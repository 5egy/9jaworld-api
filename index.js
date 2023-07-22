const express = require("express");
const app = express();
const statesRouter = require("./routes/statesRoute")



app.use(statesRouter)



app.listen(5000, (err) => {
  console.log("RUNNING");
});

