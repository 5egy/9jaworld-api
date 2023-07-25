const express = require("express");
const app = express();
const statesRouter = require("./routes/statesRoute")
const countriesRouter = require("./routes/countriesRoute")
const lgasRouter = require("./routes/lgasRoutes")
const govRouter = require("./routes/govRoutes")
const presRouter = require("./routes/presidentsRoutes")




app.use(statesRouter)
app.use(countriesRouter)
app.use(lgasRouter)
app.use(govRouter)
app.use(presRouter)

app.all("/*", (req, res)=>{
  res.status(404).send({
    error: "Route not available"
  })
})


app.listen(5000, (err) => {
  console.log("SERVER RUNNING oN 5000");
});



